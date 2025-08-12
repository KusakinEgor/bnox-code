from fastapi import FastAPI
from app.api.v1.routes.auth.auth import router as auth_router

app = FastAPI()

app.include_router(auth_router)

@app.get("/")
async def root():
    return {"message": "work"}
