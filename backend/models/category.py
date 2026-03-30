from pydantic import BaseModel, Field
from typing import Optional, List
import uuid

class SubmenuItem(BaseModel):
    label: str
    slug: str
    link: str

class Category(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str
    displayName: str
    label: str
    link: str
    hasSubmenu: bool = False
    submenu: Optional[List[SubmenuItem]] = None
    order: int = 0

    class Config:
        json_schema_extra = {
            "example": {
                "name": "pavoes",
                "slug": "pavoes",
                "displayName": "PAVÕES",
                "label": "PAVÕES",
                "link": "/pavoes",
                "hasSubmenu": True,
                "submenu": [
                    {"label": "India Blue | Azul", "slug": "india-blue", "link": "/pavoes/india-blue"},
                ],
                "order": 1
            }
        }

class CategoryCreate(BaseModel):
    name: str
    slug: str
    displayName: str
    label: str
    link: str
    hasSubmenu: bool = False
    submenu: Optional[List[SubmenuItem]] = None
    order: int = 0
