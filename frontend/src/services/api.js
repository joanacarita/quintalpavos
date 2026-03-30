import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Articles API
export const getSliderArticles = async () => {
  try {
    const response = await axios.get(`${API}/articles/slider`);
    return response.data;
  } catch (error) {
    console.error('Error fetching slider articles:', error);
    throw error;
  }
};

export const getNewsArticles = async () => {
  try {
    const response = await axios.get(`${API}/articles/news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news articles:', error);
    throw error;
  }
};

export const getArticleBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API}/articles/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article ${slug}:`, error);
    throw error;
  }
};

export const getArticlesByCategory = async (category, limit = 10) => {
  try {
    const response = await axios.get(`${API}/articles/category/${category}`, {
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching articles for category ${category}:`, error);
    throw error;
  }
};

export const getArticles = async (filters = {}) => {
  try {
    const response = await axios.get(`${API}/articles`, {
      params: filters
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Categories API
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getCategoryBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API}/categories/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category ${slug}:`, error);
    throw error;
  }
};

// Settings API
export const getSiteSettings = async () => {
  try {
    const response = await axios.get(`${API}/settings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
};

// Footer Articles API  
export const getFooterArticles = async (category = 'pavoes', limit = 2) => {
  try {
    const response = await axios.get(`${API}/articles`, {
      params: { category, limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching footer articles:', error);
    throw error;
  }
};
