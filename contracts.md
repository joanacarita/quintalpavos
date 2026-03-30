# QuintalPavos - Backend Integration Contracts

## Overview
This document outlines the API contracts, data models, and integration strategy for transforming the QuintalPavos frontend from mock data to a fully functional full-stack application.

---

## 1. Database Models (MongoDB Collections)

### 1.1 Articles Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  content: String (full article content),
  image: String (URL),
  category: String (enum: ['pavoes', 'galinhas', 'cisnes', 'perus', 'news', 'cites', 'artigos']),
  slug: String (URL-friendly),
  featured: Boolean,
  showInSlider: Boolean,
  comments: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 1.2 Categories Collection
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  displayName: String,
  hasSubmenu: Boolean,
  submenuItems: [{
    label: String,
    slug: String
  }],
  order: Number
}
```

### 1.3 SiteSettings Collection
```javascript
{
  _id: ObjectId,
  contactName: String,
  contactEmail: String,
  contactPhone: String,
  siteName: String,
  tagline: String,
  updatedAt: Date
}
```

---

## 2. API Endpoints

### 2.1 Articles API
- **GET /api/articles**
  - Query params: category, featured, showInSlider, limit, skip
  - Returns: Array of articles
  
- **GET /api/articles/slider**
  - Returns: 5 articles for homepage slider (showInSlider=true)
  
- **GET /api/articles/news**
  - Returns: Latest 3 news articles for NOVIDADES section
  
- **GET /api/articles/:slug**
  - Returns: Single article by slug
  
- **GET /api/articles/category/:category**
  - Returns: Articles filtered by category

### 2.2 Categories API
- **GET /api/categories**
  - Returns: All categories with menu structure

### 2.3 Site Settings API
- **GET /api/settings**
  - Returns: Site settings (contact info, site name, etc.)

---

## 3. Mocked Data to Replace

### From mock.js:
1. **sliderArticles** → Replace with API call to `/api/articles/slider`
2. **newsArticles** → Replace with API call to `/api/articles/news`
3. **menuItems** → Replace with API call to `/api/categories`
4. **footerPavoes** → Replace with API call to `/api/articles?category=pavoes&limit=2`
5. **footerLinks.avesQuintalPavos** → Replace with API call to `/api/categories`
6. **contactInfo** → Replace with API call to `/api/settings`

---

## 4. Backend Implementation Tasks

### Phase 1: Models & Database Setup
- [ ] Create Article model with schema validation
- [ ] Create Category model
- [ ] Create SiteSettings model
- [ ] Create seed data script to populate initial data

### Phase 2: API Endpoints
- [ ] Implement Articles CRUD routes
- [ ] Implement Categories routes
- [ ] Implement Settings routes
- [ ] Add error handling middleware
- [ ] Add pagination support

### Phase 3: Frontend Integration
- [ ] Create API service file (src/services/api.js)
- [ ] Update HomePage to fetch data from APIs
- [ ] Add loading states
- [ ] Add error handling
- [ ] Remove mock.js dependency

---

## 5. Frontend Integration Strategy

### 5.1 API Service Layer
Create `src/services/api.js`:
```javascript
- getSliderArticles()
- getNewsArticles()
- getCategories()
- getFooterArticles()
- getSiteSettings()
- getArticleBySlug(slug)
- getArticlesByCategory(category)
```

### 5.2 Component Updates
**HomePage.jsx:**
- Add useEffect hooks to fetch data on mount
- Add loading state
- Replace mock data with API responses
- Handle errors gracefully

**Header.jsx:**
- Fetch categories from API
- Build menu structure dynamically

**Footer.jsx:**
- Fetch footer data from API
- Fetch site settings for contact info

---

## 6. Data Flow

```
Frontend Component → API Service → Backend Route → MongoDB → Response → Component State → UI Update
```

### Example: HomePage Slider
1. HomePage mounts
2. useEffect calls `api.getSliderArticles()`
3. API service calls `GET /api/articles/slider`
4. Backend queries MongoDB for articles with showInSlider=true
5. Returns array of 5 articles
6. Frontend updates state
7. HeroSlider component renders with real data

---

## 7. Success Criteria

- ✅ All mock data replaced with database-driven content
- ✅ Homepage displays articles from database
- ✅ Navigation menu generated from database categories
- ✅ Footer content fetched from database
- ✅ All API endpoints return proper responses
- ✅ Error handling implemented
- ✅ No frontend errors in console
- ✅ Smooth loading states for better UX

---

## 8. Future Enhancements (Optional)
- Admin panel for content management
- Article creation/editing interface
- Image upload functionality
- Comments system
- Search functionality
- Authentication for admin
