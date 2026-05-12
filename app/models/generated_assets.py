import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base


class GeneratedAsset(Base):
    __tablename__ = "generated_assets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    session_id = Column(UUID(as_uuid=True), ForeignKey("connection_sessions.id"), nullable=False)
    physical_asset_id = Column(UUID(as_uuid=True), ForeignKey("snowflake_assets.id"), nullable=True)
    layer = Column(String, nullable=False)       # semantic / conceptual
    asset_type = Column(String, nullable=False)  # System / DataModel / DataEntity / DataAttribute / LineOfBusiness / DataDomain / BusinessTerm
    asset_name = Column(String, nullable=False)
    definition = Column(Text, nullable=True)
    status = Column(String, default="pending")
    collibra_asset_id = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
