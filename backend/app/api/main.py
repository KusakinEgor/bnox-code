from fastapi import FastAPI
from app.api.v1.routes.auth.auth import router as auth_router
from app.api.v1.routes.users.user import router as user_router
from app.api.v1.routes.code.snippets import router as code_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(code_router)

@app.get("/")
async def root():
    return {"message": "work"}
