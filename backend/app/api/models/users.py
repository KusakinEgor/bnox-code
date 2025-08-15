from __future__ import annotations
import enum
import uuid
from datetime import datetime
from typing import Optional
from sqlalchemy import (
    String, DateTime, Enum
)
from sqlalchemy.orm import (
    Mapped, mapped_column, relationship
)
from app.api.db.database import Base
from sqlalchemy.dialects.postgresql import UUID

class AuthProvider(enum.Enum):
    google = "google"
    github = "github"
    local = "local"

class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    avatar_url: Mapped[Optional[str]] = mapped_column(String(500))
    auth_provider: Mapped[AuthProvider] = mapped_column(Enum(AuthProvider), nullable=False)
    oauth_id: Mapped[Optional[str]] = mapped_column(String(255))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    last_login: Mapped[Optional[datetime]] = mapped_column(DateTime)

    projects: Mapped[list["Project"]] = relationship(
        "Project",
        back_populates="owner",
        cascade="all, delete-orphan"
    )
    activities: Mapped[list["Activity"]] = relationship(
        "Activity",
        back_populates="user",
        cascade="all, delete-orphan"
    )
    editor_settings: Mapped[Optional["EditorSettings"]] = relationship(
        "EditorSettings",
        back_populates="user",
        uselist=False
    )
    snippets: Mapped[list["Snippet"]] = relationship(
        "Snippet",
        back_populates="owner",
        cascade="all, delete-orphan"
    )
