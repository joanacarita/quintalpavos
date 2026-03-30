from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import uuid

class Article(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    content: str = ""
    image: str
    category: str
    slug: str
    featured: bool = False
    showInSlider: bool = False
    comments: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "title": "CITES",
                "description": "Informação sobre CITES Pavões da espécie Pavo cristatus",
                "content": "Full article content here...",
                "image": "https://example.com/image.jpg",
                "category": "cites",
                "slug": "cites",
                "featured": False,
                "showInSlider": True,
                "comments": 0
            }
        }

class ArticleCreate(BaseModel):
    title: str
    description: str
    content: str = ""
    image: str
    category: str
    slug: str
    featured: bool = False
    showInSlider: bool = False

class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    content: Optional[str] = None
    image: Optional[str] = None
    category: Optional[str] = None
    slug: Optional[str] = None
    featured: Optional[bool] = None
    showInSlider: Optional[bool] = None
