from fastapi import APIRouter
from fastapi.responses import RedirectResponse
import httpx

from app.api.config import CLIENT_ID, CLIENT_SECRET, REDIRECT_URI

router = APIRouter(
    prefix="/login",
    tags=["OAuth"]
)

@router.get("/github")
async def login_github():
    url = (
        f"https://github.com/login/oauth/authorize"
        f"?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope=user"
    )

    return RedirectResponse(url)

@router.get("/ide")
async def github_callback(code: str):
    async with httpx.AsyncClient() as client:
        token_resp = await client.post(
            "https://github.com/login/oauth/access_token",
            headers={"Accept": "application/json"},
            data={
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "code": code,
                "redirect_uri": REDIRECT_URI,
            },
        )

        token_json = token_resp.json()
        access_token = token_json.get("access_token")

        user_resp = await client.get(
            "https://api.github.com/user",
            headers={"Authorization": f"token {access_token}"},
        )

        user_data = user_resp.json()

        return {"user": user_data}
