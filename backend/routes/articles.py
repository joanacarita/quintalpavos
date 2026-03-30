from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
import logging
from models.article import Article, ArticleCreate, ArticleUpdate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/articles", tags=["articles"])

# Database will be injected via dependency
def get_db():
    from server import db
    return db

@router.get("/slider", response_model=List[Article])
async def get_slider_articles():
    """
    Get articles for homepage slider (showInSlider=True)
    """
    try:
        db = get_db()
        articles = await db.articles.find({"showInSlider": True}).limit(5).to_list(5)
        return articles
    except Exception as e:
        logger.error(f"Error fetching slider articles: {e}")
        raise HTTPException(status_code=500, detail="Error fetching slider articles")

@router.get("/news", response_model=List[Article])
async def get_news_articles():
    """
    Get latest news articles for NOVIDADES section
    """
    try:
        db = get_db()
        articles = await db.articles.find({"category": "news"}).limit(3).to_list(3)
        # If no news category articles, get latest 3 articles
        if not articles:
            articles = await db.articles.find().sort("createdAt", -1).limit(3).to_list(3)
        return articles
    except Exception as e:
        logger.error(f"Error fetching news articles: {e}")
        raise HTTPException(status_code=500, detail="Error fetching news articles")

@router.get("/category/{category}", response_model=List[Article])
async def get_articles_by_category(
    category: str,
    limit: int = Query(10, ge=1, le=100),
    skip: int = Query(0, ge=0)
):
    """
    Get articles filtered by category
    """
    try:
        db = get_db()
        articles = await db.articles.find({"category": category}).skip(skip).limit(limit).to_list(limit)
        return articles
    except Exception as e:
        logger.error(f"Error fetching articles by category: {e}")
        raise HTTPException(status_code=500, detail="Error fetching articles")

@router.get("/{slug}", response_model=Article)
async def get_article_by_slug(slug: str):
    """
    Get a single article by slug
    """
    try:
        db = get_db()
        article = await db.articles.find_one({"slug": slug})
        if not article:
            raise HTTPException(status_code=404, detail="Article not found")
        return article
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching article: {e}")
        raise HTTPException(status_code=500, detail="Error fetching article")

@router.get("/", response_model=List[Article])
async def get_articles(
    category: Optional[str] = None,
    featured: Optional[bool] = None,
    showInSlider: Optional[bool] = None,
    limit: int = Query(10, ge=1, le=100),
    skip: int = Query(0, ge=0)
):
    """
    Get articles with optional filters
    """
    try:
        db = get_db()
        query = {}
        if category:
            query["category"] = category
        if featured is not None:
            query["featured"] = featured
        if showInSlider is not None:
            query["showInSlider"] = showInSlider
        
        articles = await db.articles.find(query).skip(skip).limit(limit).to_list(limit)
        return articles
    except Exception as e:
        logger.error(f"Error fetching articles: {e}")
        raise HTTPException(status_code=500, detail="Error fetching articles")

@router.post("/", response_model=Article)
async def create_article(article: ArticleCreate):
    """
    Create a new article
    """
    try:
        db = get_db()
        article_dict = article.dict()
        new_article = Article(**article_dict)
        await db.articles.insert_one(new_article.dict())
        return new_article
    except Exception as e:
        logger.error(f"Error creating article: {e}")
        raise HTTPException(status_code=500, detail="Error creating article")

@router.put("/{article_id}", response_model=Article)
async def update_article(article_id: str, article_update: ArticleUpdate):
    """
    Update an existing article
    """
    try:
        db = get_db()
        update_data = {k: v for k, v in article_update.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No fields to update")
        
        result = await db.articles.find_one_and_update(
            {"id": article_id},
            {"$set": update_data},
            return_document=True
        )
        
        if not result:
            raise HTTPException(status_code=404, detail="Article not found")
        
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating article: {e}")
        raise HTTPException(status_code=500, detail="Error updating article")

@router.delete("/{article_id}")
async def delete_article(article_id: str):
    """
    Delete an article
    """
    try:
        db = get_db()
        result = await db.articles.delete_one({"id": article_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Article not found")
        
        return {"message": "Article deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting article: {e}")
        raise HTTPException(status_code=500, detail="Error deleting article")
