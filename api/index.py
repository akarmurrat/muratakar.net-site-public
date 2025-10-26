import os
import sys
from pathlib import Path

# Ensure backend directory is on sys.path so imports like `from server import app` work
BACKEND_DIR = Path(__file__).resolve().parent.parent / "app" / "backend"
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

# Expose FastAPI app instance for Vercel (ASGI)
from server import app as fastapi_app  # noqa: E402

# Vercel looks for a top-level `app` variable
app = fastapi_app
