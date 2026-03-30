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
          
          {/* Direct article routes */}
          <Route path="/quintal-pavos" element={<ArticlePage />} />
          <Route path="/cites" element={<ArticlePage />} />
          <Route path="/cisne-de-pescoco-preto" element={<ArticlePage />} />
          <Route path="/prussian-blue-azul-da-prussia" element={<ArticlePage />} />
          <Route path="/india-blue-azul" element={<ArticlePage />} />
          <Route path="/fenix-branco" element={<ArticlePage />} />
          <Route path="/novidades" element={<ArticlePage />} />
          <Route path="/artigos" element={<ArticlePage />} />
          
          {/* Category routes */}
          <Route path="/news" element={<CategoryPage />} />
          <Route path="/pavoes" element={<CategoryPage />} />
          <Route path="/cisnes" element={<CategoryPage />} />
          <Route path="/galinhas" element={<CategoryPage />} />
          <Route path="/perus" element={<CategoryPage />} />
          <Route path="/destaques" element={<CategoryPage />} />
          
          {/* Contact */}
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/contactos" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
