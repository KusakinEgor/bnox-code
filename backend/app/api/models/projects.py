from __future__ import annotations
from .utils import (
    uuid_pk, Mapped, uuid, mapped_column, ForeignKey, String, Optional,
    Text, Enum, enum, Boolean, datetime, DateTime, relationship
)
from app.api.db.database import Base

class Language(enum.Enum):
    python = "python"
    javascript = "javascript"

class Project(Base):
    __tablename__ = "projects"

    id = uuid_pk()
    owner_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )
    title: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[Optional[str]] = mapped_column(Text)
    language: Mapped[Language] = mapped_column(Enum(Language), nullable=False)
    code: Mapped[str] = mapped_column(Text, nullable=False)
    is_public: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    update_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    owner: Mapped["User"] = relationship(back_populates="projects")
    versions: Mapped[list[ProjectVersion]] = relationship(
        back_populates="project",
        cascade="all, delete-orphan"
    )

class ProjectVersion(Base):
    __tablename__ = "project_versions"

    id = uuid_pk()
    project_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("projects.id"), nullable=False)
    code: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    project: Mapped[Project] = relationship(back_populates="versions")
