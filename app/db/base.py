from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Import all models here so Alembic can detect them
from app.models.connection_sessions import ConnectionSession  # noqa: F401, E402
from app.models.snowflake_assets import SnowflakeAsset        # noqa: F401, E402
from app.models.generated_assets import GeneratedAsset        # noqa: F401, E402
