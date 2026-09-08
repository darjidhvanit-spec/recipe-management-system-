import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RecipeSection from "./components/RecipeSection";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";


// =====================================================
// HOME PAGE
// =====================================================

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RecipeSection />
      <CategorySection />
      <Footer />
    </>
  );
}


// =====================================================
// APP
// =====================================================

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Navbar stays visible on all pages */}
      <Navbar />

      <main>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Contact Us */}
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About/>} />

          <Route path="/categories" element={<Categories/>} />

          <Route path="/recipes" element={<Recipes />} />

         
        </Routes>
      </main>

    </div>
  );
}

export default App;