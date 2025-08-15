from .utils import (
    mapped_column, Mapped, ForeignKey, Optional, datetime, JSON, DateTime,
    relationship, uuid_pk, uuid, String
)
from app.api.db.database import Base

class EditorSettings(Base):
    __tablename__ = "editor_settings"

    id = uuid_pk()
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id"), nullable=False)
    theme: Mapped[Optional[str]] = mapped_column(String(50))
    font_size: Mapped[Optional[int]]
    keymap: Mapped[Optional[str]]
    custom_colors: Mapped[Optional[dict]] = mapped_column(JSON)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    user: Mapped["User"] = relationship(back_populates="editor_settings")

