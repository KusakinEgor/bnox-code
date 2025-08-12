from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.api.models import User
from app.api.core.security import get_password_hash, verify_password, create_access_token
from .schemas import UserCreate, UserLogin

async def register_user(user_data: UserCreate, db: AsyncSession):
    unique_email = select(User).where(User.email == user_data.email)
    answer = await db.execute(unique_email)

    if answer.scalar_one_or_none():
        return None


async def authenticate_user(user_data: UserLogin, db: AsyncSession):
    unique_email = select(User).where(User.email == user_data.email)
    answer = await db.execute(unique_email)
    user = answer.scalar_one_or_none()

    if not user or not verify_password(user_data.password, user.hashed_password):
        return None
    
    token = create_access_token({"sub": str(user.id)})
    return token
