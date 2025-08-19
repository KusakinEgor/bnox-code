from fastapi import APIRouter
from fastapi.responses import RedirectResponse
from fastapi.requests import Request
import httpx
import urllib.parse
import logging

from app.api.config import (
    GOOGLE_REDIRECT_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_SCOPE
)

router = APIRouter(
    prefix="/login",
    tags=["OAuth"]
)

FRONTEND_URL = "http://localhost:5173/ide"

@router.get("/google")
def login_google():
    params = {
        "client_id": GOOGLE_CLIENT_ID,
        "redirect_uri": GOOGLE_REDIRECT_URI,
        "response_type": "code",
        "scope": GOOGLE_SCOPE,
        "access_type": "offline",
        "prompt": "consent"
    }

    url = "https://accounts.google.com/o/oauth2/v2/auth?" + urllib.parse.urlencode(params)

    return RedirectResponse(url)

@router.get("/google/callback")
def google_callback(request: Request):
    code = request.query_params.get("code")
    if not code:
        return {"error": "No code provided in callback"}

    token_url = "https://oauth2.googleapis.com/token"

    try:
        token_response = httpx.post(token_url, data={
            "code": code,
            "client_id": GOOGLE_CLIENT_ID,
            "client_secret": GOOGLE_CLIENT_SECRET,
            "redirect_uri": GOOGLE_REDIRECT_URI,
            "grant_type": "authorization_code"
        })

        tokens = token_response.json()
        if "error" in tokens:
            logging.error(f"Error getting token from Google: {tokens}")
            return {"error": tokens}

        access_token = tokens.get("access_token")
        if not access_token:
            return {"error": "Failed to get access token"}

        user_response = httpx.get(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            params={"alt": "json"},
            headers={"Authorization": f"Bearer {access_token}"}
        )
        user_info = user_response.json()
        logging.info(f"User info received: {user_info}")

        return RedirectResponse(FRONTEND_URL)

    except httpx.RequestError as e:
        logging.error(f"HTTP error during Google OAuth: {e}")
        return {"error": "HTTP request failed"}

