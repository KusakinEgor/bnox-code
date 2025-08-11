import pytest
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text
from app.api.config import DATABASE_URL

@pytest.mark.asyncio
async def test_db_connection():
    engine = create_async_engine(DATABASE_URL, echo=True)

    try:
        async with engine.connect() as conn:
            result = await conn.execute(text("SELECT 1"))
            scalar_result = result.scalar()
            assert scalar_result == 1
    finally:
        await engine.dispose()
