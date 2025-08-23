from fastapi import APIRouter, Form
from pydantic import EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.api.config import SENDER_EMAIL, SENDER_PASSWORD

router = APIRouter()

@router.post("/contact")
async def contact(
    name: str = Form(...),
    email: EmailStr = Form(...),
    message: str = Form(...)
):
    sender_email = SENDER_EMAIL
    sender_password = SENDER_PASSWORD
    receiver_email = "kusakinegor43@gmail.com"

    subject = f"New contact message from {name}"
    body = f"From: {name} <{email}>\n\nMessage:\n{message}"

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = subject
    msg.add_header("Reply-To", email)
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())

        return {"status": "ok", "message": "Email sent successfully!"}
    
    except Exception as e:
        return {"status": "error", "message": str(e)}
