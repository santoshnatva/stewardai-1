import os
import json
import jwt
import requests
from fastapi import Depends, Header, HTTPException
from dotenv import load_dotenv

load_dotenv()

CLERK_SECRET_KEY = os.environ.get("CLERK_SECRET_KEY", "")
JWKS_URL = "https://api.clerk.com/v1/jwks"


def _get_jwks() -> dict:
    response = requests.get(
        JWKS_URL,
        headers={"Authorization": f"Bearer {CLERK_SECRET_KEY}"},
        timeout=10,
    )
    response.raise_for_status()
    return response.json()


def verify_clerk_token(token: str) -> dict:
    try:
        header = jwt.get_unverified_header(token)
        kid = header.get("kid")

        jwks = _get_jwks()

        key_data = next(
            (k for k in jwks.get("keys", []) if k.get("kid") == kid), None
        )
        if key_data is None:
            raise ValueError("Signing key not found in JWKS")

        public_key = jwt.algorithms.RSAAlgorithm.from_jwk(json.dumps(key_data))
        payload = jwt.decode(token, public_key, algorithms=["RS256"])

        user_id = payload.get("sub")
        email_addresses = payload.get("email_addresses", [])
        email = email_addresses[0] if email_addresses else None

        return {"user_id": user_id, "email": email}

    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


def get_current_user(authorization: str = Header(None)) -> dict:
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header required")
    token = authorization.removeprefix("Bearer ")
    return verify_clerk_token(token)


require_auth = Depends(get_current_user)
