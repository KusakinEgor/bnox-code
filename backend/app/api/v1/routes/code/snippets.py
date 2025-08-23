from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from uuid import UUID

from app.api.db.database import get_db
from app.api.models.users import User
from app.api.core.security import get_current_user
from .schemas import SnippetCreate, SnippetOut
from .service import create_snippet, get_user_snippets, get_snippet

router = APIRouter(
    prefix="/snippets",
    tags=["Snippites"]
)

@router.post("/", response_model=SnippetOut)
async def create_new_snippet(
    snippet_data: SnippetCreate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    return await create_snippet(current_user.id, snippet_data, db)

@router.get("/", response_model=list[SnippetOut])
async def list_my_snippets(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    return await get_user_snippets(current_user.id, db)

@router.get("/{snippet_id}")
async def get_snippet_by_id(
    snippet_id: UUID,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    snippet = await get_snippet(snippet_id, db)

    if not snippet or snippet.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Snippet not found"
        )
    
    return snippet
