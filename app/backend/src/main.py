from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from redis import Redis
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

# Database dependencies
async def get_db():
    from sqlalchemy import create_engine
    engine = create_engine(os.getenv("DATABASE_URL"))
    return engine.connect()

async def get_redis():
    return Redis.from_url(os.getenv("REDIS_URL"))

@app.get("/system/status")
async def system_status(
    db = Depends(get_db),
    redis = Depends(get_redis)
):
    db_status = "ok" if await db.execute(text("SELECT 1")) else "error"
    redis_status = "ok" if redis.ping() else "error"
    
    return {
        "database": db_status,
        "redis": redis_status,
        "version": "0.1.0"
    } 