from fastapi import APIRouter, HTTPException
from typing import List
import logging
from models.category import Category, CategoryCreate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/categories", tags=["categories"])

# Database will be injected via dependency
def get_db():
    from server import db
    return db

@router.get("/", response_model=List[Category])
async def get_categories():
    """
    Get all categories ordered by order field
    """
    try:
        db = get_db()
        categories = await db.categories.find().sort("order", 1).to_list(100)
        return categories
    except Exception as e:
        logger.error(f"Error fetching categories: {e}")
        raise HTTPException(status_code=500, detail="Error fetching categories")

@router.get("/{slug}", response_model=Category)
async def get_category_by_slug(slug: str):
    """
    Get a single category by slug
    """
    try:
        db = get_db()
        category = await db.categories.find_one({"slug": slug})
        if not category:
            raise HTTPException(status_code=404, detail="Category not found")
        return category
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching category: {e}")
        raise HTTPException(status_code=500, detail="Error fetching category")

@router.post("/", response_model=Category)
async def create_category(category: CategoryCreate):
    """
    Create a new category
    """
    try:
        db = get_db()
        category_dict = category.dict()
        new_category = Category(**category_dict)
        await db.categories.insert_one(new_category.dict())
        return new_category
    except Exception as e:
        logger.error(f"Error creating category: {e}")
        raise HTTPException(status_code=500, detail="Error creating category")
