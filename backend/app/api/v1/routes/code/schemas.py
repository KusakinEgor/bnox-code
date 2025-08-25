from pydantic import BaseModel
from uuid import UUID
from datetime import datetime
from app.api.models.snippets import Language

class SnippetBase(BaseModel):
    language: Language
    code: str

class SnippetCreate(SnippetBase):
    pass

class SnippetOut(SnippetBase):
    id: UUID
    user_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
