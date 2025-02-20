from sqlalchemy import Column, Integer, String, DateTime, JSON
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Photo(Base):
    __tablename__ = "photos"
    
    id = Column(Integer, primary_key=True)
    file_path = Column(String, unique=True)
    file_hash = Column(String(64))
    file_size = Column(Integer)
    file_type = Column(String(10))
    metadata = Column(JSON)
    created_at = Column(DateTime)
    updated_at = Column(DateTime) 