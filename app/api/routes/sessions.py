from fastapi import APIRouter, Depends
from app.auth.clerk import get_current_user

router = APIRouter()


@router.get("/sessions")
def list_sessions(current_user: dict = Depends(get_current_user)):
    return {"sessions": [], "user": current_user}
