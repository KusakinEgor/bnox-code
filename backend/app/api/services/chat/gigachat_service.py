import requests
import uuid
import base64

from app.api.config import GIGA_CLIENT_ID, GIGA_CLIENT_SECRET

ACCESS_TOKEN = None

auth_str = f"{GIGA_CLIENT_ID}:{GIGA_CLIENT_SECRET}"
b64_auth = base64.b64encode(auth_str.encode()).decode()

def get_token():
    global ACCESS_TOKEN

    url = "https://ngw.devices.sberbank.ru:9443/api/v2/oauth"
    headers = {
        "Authorization": f"Basic {b64_auth}",
        "RqUID": str(uuid.uuid4()),
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {"scope": "GIGACHAT_API_PERS"}

    answer = requests.post(url, headers=headers, data=data, verify=False)
    answer.raise_for_status()

    ACCESS_TOKEN = answer.json()["access_token"]
    return ACCESS_TOKEN

def send_message_to_gigachat(message: str):
    global ACCESS_TOKEN

    if not ACCESS_TOKEN:
        ACCESS_TOKEN = get_token()
    
    url = "https://gigachat.devices.sberbank.ru/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }
    data = {
        "model": "GigaChat",
        "messages": [{
            "role": "user",
            "content": message
        }]
    }

    answer = requests.post(url, headers=headers, json=data, verify=False)

    if answer.status_code == 401:
        ACCESS_TOKEN = get_token()
        headers["Authorization"] = f"Bearer {ACCESS_TOKEN}"
        answer = requests.post(url, headers=headers, json=data, verify=False)

    answer.raise_for_status()
    return answer.json()
