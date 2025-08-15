from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.api.models.snippets import Snippet
from .schemas import SnippetCreate
import uuid
from datetime import datetime

async def create_snippet(
        user_id: uuid.UUID,
        snippet_data: SnippetCreate,
        db: AsyncSession
):
    snippet = Snippet(
        id=uuid.uuid4(),
        user_id=user_id,
        language=snippet_data.language,
        code=snippet_data.code,
        created_at = datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    db.add(snippet)
    await db.commit()
    await db.refresh(snippet)

    return snippet

async def get_user_snippets(user_id: uuid.UUID, db: AsyncSession):
    id_check = await db.execute(select(Snippet).where(Snippet.user_id == user_id))
    return id_check.scalars().all()

async def get_snippet(snippet_id: uuid.UUID, db: AsyncSession):
    snippet_check = await db.execute(select(Snippet).where(Snippet.id == snippet_id))
    return snippet_check.scalar_one_or_none()


