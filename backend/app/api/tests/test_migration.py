from alembic.config import Config
from alembic import command
import sqlalchemy
import pytest

@pytest.fixture
def alembic_config():
    cfg = Config("alembic.ini")
    return cfg

def test_upgrade_and_downgrade(alembic_config):
    command.upgrade(alembic_config, "head")

    engine = sqlalchemy.create_engine()
    inspector = sqlalchemy.inspect(engine)
    assert 'users' in inspector.get_table_names()

    command.downgrade(alembic_config, "base")
    assert 'users' not in inspector.get_table_names()
