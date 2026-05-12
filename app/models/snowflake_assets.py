import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, DateTime, Integer, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base


class SnowflakeAsset(Base):
    __tablename__ = "snowflake_assets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), ForeignKey("connection_sessions.id"), nullable=False)
    asset_level = Column(String, nullable=False)  # database / schema / table / column
    asset_name = Column(String, nullable=False)
    parent_id = Column(UUID(as_uuid=True), ForeignKey("snowflake_assets.id"), nullable=True)
    full_path = Column(String, nullable=False)
    row_count = Column(Integer, nullable=True)
    data_type = Column(String, nullable=True)
    is_nullable = Column(Boolean, nullable=True)
    sf_comment = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
