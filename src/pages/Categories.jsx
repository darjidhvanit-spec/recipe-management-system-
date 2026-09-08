import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Coffee,
  Sun,
  Moon,
  Apple,
  Cake,
  Wine,
  Sparkles,
  ArrowRight,
  Search,
  Star,
  Flame,
  ChefHat,
  Utensils,
} from "lucide-react";
import "./Categories.css";

const categoriesData = [
  {
    id: 1,
    name: "Breakfast",
    icon: Coffee,
    emoji: "🍳",
    image: "/images/breakfast.jpg",
    recipeCount: "65+ Recipes",
    rating: "4.9",
    tagline: "Energize Your Morning",
    description:
      "Start your day with fluffy buttermilk pancakes, golden waffles, avocado toast, and protein-packed morning platters.",
    popularItems: [
      "Berry Pancakes",
      "Avocado Toast",
      "Egg Platter",
      "Belgian Waffles",
    ],
    sampleRecipes: [
      {
        name: "Fluffy Berry Pancakes",
        time: "20 mins",
        rating: 4.8,
        img: "/images/berry-pancakes.jpg",
      },
      {
        name: "Avocado & Egg Crunch Toast",
        time: "15 mins",
        rating: 4.6,
        img: "/images/avocado-toast.jpg",
      },
      {
        name: "Classic Sunrise Platter",
        time: "15 mins",
        rating: 4.9,
        img: "/images/breakfast.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Lunch",
    icon: Sun,
    emoji: "🥗",
    image: "/images/lunch.jpg",
    recipeCount: "80+ Recipes",
    rating: "4.8",
    tagline: "Wholesome & Nourishing",
    description:
      "Satisfying midday bowls, fresh Mediterranean salads, artisan deli sandwiches, and velvety pasta creations.",
    popularItems: [
      "Creamy Pasta",
      "Garden Salad",
      "Mediterranean Bowl",
      "Chicken Wrap",
    ],
    sampleRecipes: [
      {
        name: "Creamy Garlic Fettuccine",
        time: "25 mins",
        rating: 4.9,
        img: "/images/creamy-pasta.jpg",
      },
      {
        name: "Mediterranean Garden Salad",
        time: "15 mins",
        rating: 4.7,
        img: "/images/healthy-salad.jpg",
      },
      {
        name: "Mediterranean Grain Bowl",
        time: "25 mins",
        rating: 4.8,
        img: "/images/lunch.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Dinner",
    icon: Moon,
    emoji: "🍕",
    image: "/images/Dinner.jpg",
    recipeCount: "95+ Recipes",
    rating: "4.9",
    tagline: "Gourmet Evening Feasts",
    description:
      "Hearty dinners for family gatherings, from artisan Italian cheese pizzas to garlic rosemary grilled steaks.",
    popularItems: [
      "Italian Pizza",
      "Herb Steak",
      "Garlic Alfredo",
      "Grilled Salmon",
    ],
    sampleRecipes: [
      {
        name: "Italian Cheese Pizza",
        time: "35 mins",
        rating: 4.9,
        img: "/images/italian-pizza.jpg",
      },
      {
        name: "Gourmet Herb Steak Platter",
        time: "40 mins",
        rating: 4.8,
        img: "/images/Dinner.jpg",
      },
      {
        name: "Chef's Roasted Special",
        time: "30 mins",
        rating: 4.7,
        img: "/images/food-img.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Snacks",
    icon: Apple,
    emoji: "🍿",
    image: "/images/snacks.jpg",
    recipeCount: "50+ Recipes",
    rating: "4.7",
    tagline: "Crispy & Quick Bites",
    description:
      "Quick appetizers, crunchy seasoned potato wedges, loaded nachos, and healthy bite-sized party treats.",
    popularItems: [
      "Potato Wedges",
      "Cheesy Nachos",
      "Avocado Dip",
      "Crispy Fries",
    ],
    sampleRecipes: [
      {
        name: "Crispy Golden Potato Wedges",
        time: "20 mins",
        rating: 4.7,
        img: "/images/snacks.jpg",
      },
      {
        name: "Guacamole Toast Bites",
        time: "10 mins",
        rating: 4.8,
        img: "/images/avocado-toast.jpg",
      },
      {
        name: "Garden Crunch Bites",
        time: "12 mins",
        rating: 4.6,
        img: "/images/healthy-salad.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Desserts",
    icon: Cake,
    emoji: "🍰",
    image: "/images/desserts.jpg",
    recipeCount: "45+ Recipes",
    rating: "4.9",
    tagline: "Sweet Temptations",
    description:
      "Indulgent treats, velvety cheesecakes, warm molten dark chocolate cakes, fruit tarts, and creamy puddings.",
    popularItems: [
      "Strawberry Cheesecake",
      "Chocolate Lava",
      "Berry Crepes",
      "Vanilla Tart",
    ],
    sampleRecipes: [
      {
        name: "Strawberry Cream Cheesecake",
        time: "45 mins",
        rating: 4.9,
        img: "/images/desserts.jpg",
      },
      {
        name: "Chef's Decadent Chocolate Lava",
        time: "30 mins",
        rating: 4.9,
        img: "/images/food-img.jpg",
      },
      {
        name: "Wild Berry Crepe Delight",
        time: "15 mins",
        rating: 4.8,
        img: "/images/berry-pancakes.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Drinks",
    icon: Wine,
    emoji: "🍹",
    image: "/images/drinks.jpg",
    recipeCount: "40+ Recipes",
    rating: "4.8",
    tagline: "Refreshing & Hydrating",
    description:
      "Handcrafted smoothies, fresh fruit coolers, artisanal mocktails, sparkling citrus fizzes, and cold brews.",
    popularItems: [
      "Citrus Cooler",
      "Berry Smoothie",
      "Sparkling Fizz",
      "Iced Latte",
    ],
    sampleRecipes: [
      {
        name: "Sparkling Citrus Cooler",
        time: "5 mins",
        rating: 4.9,
        img: "/images/drinks.jpg",
      },
      {
        name: "Fresh Orange Cooler",
        time: "5 mins",
        rating: 4.9,
        img: "/images/drinks.jpg",
      },
      {
        name: "Tropical Fruit Fizz",
        time: "5 mins",
        rating: 4.7,
        img: "/images/drinks.jpg",
      },
    ],
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);

  const filteredCategories = categoriesData.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleNavigateToCategory = (categoryName) => {
    navigate(`/recipes?search=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="categories-page">
      {/* ==============================
          HERO BANNER
      ============================== */}
      <section className="categories-hero-banner">
        <div className="categories-badge">
          <Sparkles size={16} />
          <span>Curated Recipe Collections</span>
        </div>

        <h1 className="categories-main-title">
          Explore by <span>Category</span>
        </h1>

        <p className="categories-main-desc">
          From energizing morning breakfasts to decadent evening desserts, find
          expertly crafted recipes for every craving and occasion.
        </p>

        {/* Search Bar */}
        <div className="categories-search-bar">
          <Search className="search-icon" size={19} />
          <input
            type="text"
            placeholder="Search categories (e.g. Breakfast, Lunch, Desserts)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* ==============================
          CATEGORIES CARDS GRID
      ============================== */}
      <section className="categories-grid-section">
        <div className="categories-cards-grid">
          {filteredCategories.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedCategory.id === item.id;

            return (
              <div
                key={item.id}
                className={`category-item-card ${isSelected ? "selected" : ""}`}
                onClick={() => setSelectedCategory(item)}
              >
                {/* Image Container */}
                <div className="cat-image-container">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="cat-count-badge">
                    <span>{item.recipeCount}</span>
                  </div>
                  <div className="cat-rating-badge">
                    <Star size={13} className="star-filled" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="cat-card-content">
                  <div className="cat-title-row">
                    <div className="cat-icon-box">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <small>{item.tagline}</small>
                    </div>
                  </div>

                  <p className="cat-desc">{item.description}</p>

                  {/* Popular Tags */}
                  <div className="cat-tags">
                    {item.popularItems.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="cat-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    className="cat-explore-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigateToCategory(item.name);
                    }}
                  >
                    <span>Explore Recipes</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==============================
          SELECTED CATEGORY SPOTLIGHT
      ============================== */}
      {selectedCategory && (
        <section className="category-spotlight-section">
          <div className="spotlight-header">
            <div className="spotlight-title-group">
              <span className="spotlight-emoji">{selectedCategory.emoji}</span>
              <div>
                <h2>Popular in {selectedCategory.name}</h2>
                <p>Top rated dishes recommended by our master chefs</p>
              </div>
            </div>

            <button
              className="spotlight-view-all-btn"
              onClick={() => handleNavigateToCategory(selectedCategory.name)}
            >
              <span>View All {selectedCategory.name}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="spotlight-recipes-grid">
            {selectedCategory.sampleRecipes.map((sample, idx) => (
              <div
                key={idx}
                className="spotlight-card"
                onClick={() => handleNavigateToCategory(sample.name)}
              >
                <div className="spotlight-img-box">
                  <img src={sample.img} alt={sample.name} />
                  <span className="spotlight-time-pill">{sample.time}</span>
                </div>

                <div className="spotlight-info">
                  <h4>{sample.name}</h4>
                  <div className="spotlight-rating">
                    <Star size={14} className="star-filled" />
                    <span>{sample.rating} ★★★★★</span>
                  </div>
                  <button className="spotlight-btn">
                    <span>View Recipe</span>
                    <Utensils size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ==============================
          CULINARY HIGHLIGHTS
      ============================== */}
      <section className="categories-highlights-grid">
        <div className="highlight-box">
          <div className="highlight-icon">🥘</div>
          <h3>Daily Fresh Ideas</h3>
          <p>
            Curated meal recommendations refreshed daily for breakfast, lunch,
            and dinner.
          </p>
        </div>

        <div className="highlight-box">
          <div className="highlight-icon">⏱️</div>
          <h3>Fast & Easy Prep</h3>
          <p>
            Filter dishes by cook time to fit perfectly into your busy weekday
            schedule.
          </p>
        </div>

        <div className="highlight-box">
          <div className="highlight-icon">👨‍🍳</div>
          <h3>Chef Certified</h3>
          <p>
            Tested measurements and step-by-step instructions ensure restaurant
            quality at home.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Categories;