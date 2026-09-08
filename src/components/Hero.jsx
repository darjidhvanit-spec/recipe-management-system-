import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Sparkles,
  ArrowRight,
  ChefHat,
  Star,
  Clock,
  Flame,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import "./Hero.css";

const popularTags = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Salad", emoji: "🥗" },
  { name: "Dessert", emoji: "🍰" },
  { name: "Burger", emoji: "🍔" },
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/recipes");
    }
  };

  const handleTagClick = (tagName) => {
    setSearchTerm(tagName);
    navigate(`/recipes?search=${encodeURIComponent(tagName)}`);
  };

  return (
    <section className="hero">
      {/* Decorative Glowing Orbs */}
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>

      <div className="hero-container">
        {/* ==============================
            LEFT CONTENT
        ============================== */}
        <div className="hero-left">
          {/* Trending Badge */}
          <div className="hero-badge">
            <span className="badge-icon">
              <Sparkles size={16} />
            </span>
            <span className="badge-text">
              #1 Food & Recipe Community
            </span>
            <span className="badge-flame">
              <Flame size={15} />
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Cook Delicious
            <span className="hero-title-highlight">
              Meals Every Day
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-desc">
            Discover thousands of easy, mouth-watering recipes made with fresh
            ingredients. Master culinary secrets for your healthy lifestyle!
          </p>

          {/* Search Bar */}
          <form className="hero-search-box" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search className="search-input-icon" size={20} />
              <input
                type="text"
                placeholder="Search pancakes, pasta, pizza..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button type="submit" className="hero-search-btn">
              <span>Search</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </form>

          {/* Popular Tag Pills */}
          <div className="hero-popular">
            <span className="popular-title">
              <strong>Popular:</strong>
            </span>

            <div className="popular-tags-list">
              {popularTags.map((tag) => (
                <button
                  key={tag.name}
                  type="button"
                  className="tag-pill"
                  onClick={() => handleTagClick(tag.name)}
                >
                  <span className="tag-emoji">{tag.emoji}</span>
                  <span>{tag.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Highlights */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <UtensilsCrossed size={18} />
              </div>
              <div>
                <h4>2,500+</h4>
                <p>Curated Recipes</p>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Users size={18} />
              </div>
              <div>
                <h4>80k+</h4>
                <p>Happy Foodies</p>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <ChefHat size={18} />
              </div>
              <div>
                <h4>150+</h4>
                <p>Expert Chefs</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================
            RIGHT IMAGE & FLOATING CARDS
        ============================== */}
        <div className="hero-right">
          {/* Main Visual Image Card */}
          <div className="hero-image-wrapper">
            <img
              src="/images/food-img.jpg"
              alt="Delicious Food Spread"
              className="hero-main-img"
            />
            <div className="image-overlay-glow"></div>
          </div>

          {/* Floating Badge 1: Recipe Count */}
          <div className="floating-card badge-recipes">
            <div className="floating-icon-box chef-box">
              <ChefHat size={24} />
            </div>
            <div>
              <h3>2000+</h3>
              <p>Delicious Recipes</p>
            </div>
          </div>

          {/* Floating Badge 2: Rating & Reviews */}
          <div className="floating-card badge-rating">
            <div className="floating-icon-box star-box">
              <Star size={22} className="fill-star" />
            </div>
            <div>
              <div className="rating-stars">
                <strong>4.9 / 5.0</strong>
                <span className="star-symbols">★★★★★</span>
              </div>
              <p>Over 5.2k+ Reviews</p>
            </div>
          </div>

          {/* Floating Badge 3: Quick Cooking Time */}
          <div className="floating-card badge-time">
            <div className="floating-icon-box clock-box">
              <Clock size={20} />
            </div>
            <div>
              <strong>Quick & Easy</strong>
              <p>15 - 30 Mins Prep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;