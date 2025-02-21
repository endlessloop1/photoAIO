from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from .core.database import get_db
from .core.config import get_settings
import redis.asyncio as redis
import os

app = FastAPI(title="PhotoApp Backend")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Redis connection
redis_client = redis.from_url(os.getenv("REDIS_URL"))

@app.get("/system/status")
async def system_status(db: AsyncSession = Depends(get_db)):
    try:
        await db.execute("SELECT 1")
        db_status = "ok"
    except Exception:
        db_status = "error"

    try:
        await redis_client.ping()
        redis_status = "ok"
    except Exception:
        redis_status = "error"
    
    return {
        "database": db_status,
        "redis": redis_status,
        "version": "0.1.0"
    } 