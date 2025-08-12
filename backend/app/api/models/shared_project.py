from .utils import (
    Mapped, uuid_pk, mapped_column, Optional, datetime, DateTime, ForeignKey,
    uuid, Text
)
from app.api.db.database import Base

class SharedProject(Base):
    __tablename__ = "shared_proejects"

    id = uuid_pk()
    project_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("projects.id"), nullable=False)
    from_user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id"), nullable=False)
    to_user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id"), nullable=False)
    message: Mapped[Optional[str]] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
