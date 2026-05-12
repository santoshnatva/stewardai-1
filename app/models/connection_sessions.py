import uuid
from datetime import datetime
from sqlalchemy import Column, String, Text, DateTime
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base


class ConnectionSession(Base):
    __tablename__ = "connection_sessions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(String, nullable=False)
    source_type = Column(String, default="snowflake")
    account = Column(String, nullable=True)
    username = Column(String, nullable=True)
    password_encrypted = Column(Text, nullable=True)
    warehouse = Column(String, nullable=True)
    database_name = Column(String, nullable=True)
    schema_name = Column(String, nullable=True)
    org_name = Column(String, nullable=True)
    generation_status = Column(String, default="not_started")
    generation_progress = Column(Text, nullable=True)
    generation_error = Column(Text, nullable=True)
    push_status = Column(String, default="not_started")
    push_progress = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
