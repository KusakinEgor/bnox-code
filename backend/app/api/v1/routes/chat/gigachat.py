from fastapi import APIRouter
from app.api.services.chat.gigachat_service import send_message_to_gigachat

router = APIRouter(
    tags=["AIChat"]
)

@router.post("/chat")
def chat(user_message: dict):
    return send_message_to_gigachat(user_message["message"])
