from __future__ import annotations
from .utils import (
    enum, Enum, JSON, uuid_pk, Mapped, uuid, mapped_column, ForeignKey,
    Optional, datetime, DateTime, relationship
)
from app.api.db.database import Base

class ActivityType(enum.Enum):
    create_project = "create_project"
    update_project = "update_project"
    share_code = "share_code"
    comment = "comment"

class Activity(Base):
    __tablename__ = "activity"

    id = uuid_pk()
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id"), nullable=False)
    type: Mapped[ActivityType] = mapped_column(Enum(ActivityType), nullable=False)
    meta: Mapped[Optional[dict]] = mapped_column(JSON)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    user: Mapped["User"] = relationship(
        back_populates="activities")
