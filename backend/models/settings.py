from pydantic import BaseModel, Field
from datetime import datetime
import uuid

class SiteSettings(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    siteName: str = "Quintal Pavos"
    tagline: str = "o prazer de criar"
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "João Nuno Carita",
                "email": "caritaquintalpavos@gmail.com",
                "phone": "+351 914 558 518",
                "siteName": "Quintal Pavos",
                "tagline": "o prazer de criar"
            }
        }

class SettingsUpdate(BaseModel):
    name: str
    email: str
    phone: str
    siteName: str
    tagline: str
