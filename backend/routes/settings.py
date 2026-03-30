from fastapi import APIRouter, HTTPException
import logging
from models.settings import SiteSettings, SettingsUpdate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/settings", tags=["settings"])

# Database will be injected via dependency
def get_db():
    from server import db
    return db

@router.get("/", response_model=SiteSettings)
async def get_settings():
    """
    Get site settings (contact info, site name, etc.)
    """
    try:
        db = get_db()
        settings = await db.site_settings.find_one()
        if not settings:
            # Return default settings if none exist
            default_settings = SiteSettings(
                name="João Nuno Carita",
                email="caritaquintalpavos@gmail.com",
                phone="+351 914 558 518",
                siteName="Quintal Pavos",
                tagline="o prazer de criar"
            )
            await db.site_settings.insert_one(default_settings.dict())
            return default_settings
        return settings
    except Exception as e:
        logger.error(f"Error fetching settings: {e}")
        raise HTTPException(status_code=500, detail="Error fetching settings")

@router.put("/", response_model=SiteSettings)
async def update_settings(settings_update: SettingsUpdate):
    """
    Update site settings
    """
    try:
        db = get_db()
        settings = await db.site_settings.find_one()
        
        if not settings:
            # Create new settings if none exist
            new_settings = SiteSettings(**settings_update.dict())
            await db.site_settings.insert_one(new_settings.dict())
            return new_settings
        
        # Update existing settings
        result = await db.site_settings.find_one_and_update(
            {"id": settings["id"]},
            {"$set": settings_update.dict()},
            return_document=True
        )
        
        return result
    except Exception as e:
        logger.error(f"Error updating settings: {e}")
        raise HTTPException(status_code=500, detail="Error updating settings")
