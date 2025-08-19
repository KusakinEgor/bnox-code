from fastapi import APIRouter, HTTPException
import subprocess
import uuid
import os
import tempfile

from .schemas import CodeRequest

router = APIRouter(
    prefix="/run",
    tags=["Run"]
)

@router.post("/code")
def run_code(request: CodeRequest):
    filename = os.path.join(tempfile.gettempdir(), f"{uuid.uuid4()}.py")

    with open(filename, "w") as file:
        file.write(request.code)
    
    try:
        result = subprocess.run(
            [
                "docker", "run", "--rm",
                "--memory=50m",
                "--cpus=0.5",
                "-v", f"{filename}:/app/user_code.py",
                "-w", "/app",
                "python-sandbox",
                "python", "user_code.py"
            ],
            capture_output=True,
            text=True,
            timeout=5
        )

        return {
            "stdout": result.stdout,
            "stderr": result.stderr
        }
    except subprocess.TimeoutExpired:
        return {"stdout": "", "stderr": "Execution time out"}
    finally:
        os.remove(filename)


@router.post("/script")
def run_js_code(request: CodeRequest):
    filename = os.path.join(tempfile.gettempdir(), f"{uuid.uuid4()}.js")

    with open(filename, "w") as file:
        file.write(request.code)
    
    try:
        result = subprocess.run(
            [
                "docker", "run", "--rm",
                "--memory=50m",
                "--cpus=0.5",
                "-v", f"{filename}:/app/user_code.js",
                "-w", "/app",
                "node-sandbox",
                "node", "user_code.js"
            ],
            capture_output=True,
            text=True,
            timeout=5
        )
        return {
            "stdout": result.stdout,
            "stderr": result.stderr
        }
    except subprocess.TimeoutExpired:
        return {"stdout": "", "stderr": "Execution time out"}
    finally:
        os.remove(filename)
        
