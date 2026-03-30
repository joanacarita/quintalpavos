import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/quintal-pavos" element={<ArticlePage />} />
          <Route path="/news" element={<CategoryPage />} />
          <Route path="/pavoes" element={<CategoryPage />} />
          <Route path="/cisnes" element={<CategoryPage />} />
          <Route path="/galinhas" element={<CategoryPage />} />
          <Route path="/cites" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
