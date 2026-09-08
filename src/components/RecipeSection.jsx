import React, { useState } from "react";
import "./RecipeSection.css";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snacks",
];

const recipes = [
  // Breakfast
  {
    id: 1,
    category: "Breakfast",
    name: "Berry Pancakes",
    image: "/images/berry-pancakes.jpg",
    rating: "4.8",
    reviews: "120",
    time: "20 mins",
  },
  {
    id: 2,
    category: "Breakfast",
    name: "Avocado Toast",
    image: "/images/avocado-toast.jpg",
    rating: "4.6",
    reviews: "98",
    time: "25 mins",
  },
  {
    id: 3,
    category: "Breakfast",
    name: "Classic Sunrise Platter",
    image: "/images/breakfast.jpg",
    rating: "4.9",
    reviews: "145",
    time: "15 mins",
  },
  {
    id: 4,
    category: "Breakfast",
    name: "Fresh Fruit Bowl",
    image: "/images/food-img.jpg",
    rating: "4.7",
    reviews: "89",
    time: "10 mins",
  },
  {
    id: 5,
    category: "Breakfast",
    name: "Golden Waffle Stack",
    image: "/images/berry-pancakes.jpg",
    rating: "4.8",
    reviews: "112",
    time: "20 mins",
  },
  {
    id: 6,
    category: "Breakfast",
    name: "Egg & Herb Toast",
    image: "/images/avocado-toast.jpg",
    rating: "4.5",
    reviews: "78",
    time: "18 mins",
  },
  {
    id: 7,
    category: "Breakfast",
    name: "Morning Energy Bowl",
    image: "/images/breakfast.jpg",
    rating: "4.9",
    reviews: "135",
    time: "12 mins",
  },
  {
    id: 8,
    category: "Breakfast",
    name: "Nutty Oats & Berries",
    image: "/images/food-img.jpg",
    rating: "4.7",
    reviews: "94",
    time: "15 mins",
  },

  // Lunch
  {
    id: 9,
    category: "Lunch",
    name: "Creamy Pasta",
    image: "/images/creamy-pasta.jpg",
    rating: "4.9",
    reviews: "150",
    time: "30 mins",
  },
  {
    id: 10,
    category: "Lunch",
    name: "Healthy Salad",
    image: "/images/healthy-salad.jpg",
    rating: "4.7",
    reviews: "86",
    time: "20 mins",
  },
  {
    id: 11,
    category: "Lunch",
    name: "Mediterranean Feast",
    image: "/images/lunch.jpg",
    rating: "4.8",
    reviews: "132",
    time: "25 mins",
  },
  {
    id: 12,
    category: "Lunch",
    name: "Grilled Chicken Bowl",
    image: "/images/food-img.jpg",
    rating: "4.6",
    reviews: "94",
    time: "20 mins",
  },
  {
    id: 13,
    category: "Lunch",
    name: "Garlic Herb Alfredo",
    image: "/images/creamy-pasta.jpg",
    rating: "4.8",
    reviews: "118",
    time: "25 mins",
  },
  {
    id: 14,
    category: "Lunch",
    name: "Crunchy Garden Salad",
    image: "/images/healthy-salad.jpg",
    rating: "4.7",
    reviews: "80",
    time: "15 mins",
  },
  {
    id: 15,
    category: "Lunch",
    name: "Rustic Deli Sandwich",
    image: "/images/lunch.jpg",
    rating: "4.8",
    reviews: "105",
    time: "18 mins",
  },
  {
    id: 16,
    category: "Lunch",
    name: "Quinoa Power Lunch",
    image: "/images/food-img.jpg",
    rating: "4.7",
    reviews: "91",
    time: "22 mins",
  },

  // Dinner
  {
    id: 17,
    category: "Dinner",
    name: "Italian Cheese Pizza",
    image: "/images/italian-pizza.jpg",
    rating: "4.9",
    reviews: "210",
    time: "35 mins",
  },
  {
    id: 18,
    category: "Dinner",
    name: "Gourmet Steak Platter",
    image: "/images/Dinner.jpg",
    rating: "4.8",
    reviews: "175",
    time: "40 mins",
  },
  {
    id: 19,
    category: "Dinner",
    name: "Tuscan Garlic Pasta",
    image: "/images/creamy-pasta.jpg",
    rating: "4.9",
    reviews: "160",
    time: "25 mins",
  },
  {
    id: 20,
    category: "Dinner",
    name: "Chef's Roasted Special",
    image: "/images/food-img.jpg",
    rating: "4.7",
    reviews: "130",
    time: "30 mins",
  },
  {
    id: 21,
    category: "Dinner",
    name: "Margherita Supreme",
    image: "/images/italian-pizza.jpg",
    rating: "4.8",
    reviews: "142",
    time: "30 mins",
  },
  {
    id: 22,
    category: "Dinner",
    name: "Grilled Salmon Deluxe",
    image: "/images/Dinner.jpg",
    rating: "4.9",
    reviews: "188",
    time: "35 mins",
  },
  {
    id: 23,
    category: "Dinner",
    name: "Herb Butter Fettuccine",
    image: "/images/creamy-pasta.jpg",
    rating: "4.7",
    reviews: "115",
    time: "28 mins",
  },
  {
    id: 24,
    category: "Dinner",
    name: "Smoky BBQ Platter",
    image: "/images/food-img.jpg",
    rating: "4.8",
    reviews: "155",
    time: "45 mins",
  },

  // Dessert
  {
    id: 25,
    category: "Dessert",
    name: "Strawberry Cheesecake",
    image: "/images/desserts.jpg",
    rating: "4.9",
    reviews: "190",
    time: "20 mins",
  },
  {
    id: 26,
    category: "Dessert",
    name: "Berry Crepe Delight",
    image: "/images/berry-pancakes.jpg",
    rating: "4.8",
    reviews: "140",
    time: "15 mins",
  },
  {
    id: 27,
    category: "Dessert",
    name: "Chocolate Custard Cup",
    image: "/images/desserts.jpg",
    rating: "4.9",
    reviews: "220",
    time: "25 mins",
  },
  {
    id: 28,
    category: "Dessert",
    name: "Iced Berry Sorbet",
    image: "/images/drinks.jpg",
    rating: "4.7",
    reviews: "95",
    time: "10 mins",
  },
  {
    id: 29,
    category: "Dessert",
    name: "Vanilla Caramel Tart",
    image: "/images/desserts.jpg",
    rating: "4.8",
    reviews: "110",
    time: "30 mins",
  },
  {
    id: 30,
    category: "Dessert",
    name: "Mixed Fruit Pancakes",
    image: "/images/berry-pancakes.jpg",
    rating: "4.6",
    reviews: "82",
    time: "20 mins",
  },
  {
    id: 31,
    category: "Dessert",
    name: "Glazed Berry Delight",
    image: "/images/desserts.jpg",
    rating: "4.9",
    reviews: "165",
    time: "15 mins",
  },
  {
    id: 32,
    category: "Dessert",
    name: "Mango Passion Frappe",
    image: "/images/drinks.jpg",
    rating: "4.8",
    reviews: "128",
    time: "8 mins",
  },

  // Snacks
  {
    id: 33,
    category: "Snacks",
    name: "Crispy Potato Wedges",
    image: "/images/snacks.jpg",
    rating: "4.7",
    reviews: "105",
    time: "15 mins",
  },
  {
    id: 34,
    category: "Snacks",
    name: "Guacamole Toast Bites",
    image: "/images/avocado-toast.jpg",
    rating: "4.8",
    reviews: "132",
    time: "10 mins",
  },
  {
    id: 35,
    category: "Snacks",
    name: "Fresh Orange Cooler",
    image: "/images/drinks.jpg",
    rating: "4.9",
    reviews: "160",
    time: "5 mins",
  },
  {
    id: 36,
    category: "Snacks",
    name: "Garden Crunch Bites",
    image: "/images/healthy-salad.jpg",
    rating: "4.6",
    reviews: "78",
    time: "12 mins",
  },
  {
    id: 37,
    category: "Snacks",
    name: "Loaded Golden Nachos",
    image: "/images/snacks.jpg",
    rating: "4.8",
    reviews: "145",
    time: "15 mins",
  },
  {
    id: 38,
    category: "Snacks",
    name: "Avocado Salsa Dip",
    image: "/images/avocado-toast.jpg",
    rating: "4.7",
    reviews: "95",
    time: "8 mins",
  },
  {
    id: 39,
    category: "Snacks",
    name: "Sparkling Citrus Fizz",
    image: "/images/drinks.jpg",
    rating: "4.8",
    reviews: "115",
    time: "5 mins",
  },
  {
    id: 40,
    category: "Snacks",
    name: "Crispy Herb Fries",
    image: "/images/snacks.jpg",
    rating: "4.7",
    reviews: "102",
    time: "14 mins",
  },
];

const ITEMS_PER_PAGE = 4;

const RecipeSection = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === activeCategory
  );

  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE) || 1;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleRecipes = filteredRecipes.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="recipe-section">

      {/* ==============================
          BEST SELLING RECIPES
      ============================== */}

      <div className="recipe-header">
        <h2>Best Selling Recipes</h2>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ==============================
          RECIPE CARDS SLIDER
      ============================== */}

      <div className="recipe-slider">
        {totalPages > 1 && (
          <button
            className="slider-button left"
            onClick={handlePrevious}
            aria-label="Previous recipes"
          >
            ←
          </button>
        )}

        <div className="recipe-grid">
          {visibleRecipes.length > 0 ? (
            visibleRecipes.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <div className="recipe-image">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    loading="lazy"
                  />
                </div>

                <div className="recipe-card-content">
                  <h3>{recipe.name}</h3>

                  <div className="recipe-rating">
                    <span>★★★★★</span>
                    <small>{recipe.rating}</small>
                    <small>({recipe.reviews})</small>
                  </div>

                  <div className="recipe-bottom">
                    <span className="recipe-time">
                      ◷ {recipe.time}
                    </span>

                    <button className="view-button">
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-recipe">
              No recipes available in this category.
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <button
            className="slider-button right"
            onClick={handleNext}
            aria-label="Next recipes"
          >
            →
          </button>
        )}
      </div>

      {/* ==============================
          SLIDER DOTS
      ============================== */}

      {totalPages > 1 && (
        <div className="slider-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentPage === index ? "active-dot" : ""}`}
              onClick={() => setCurrentPage(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* ==============================
          TODAY'S SPECIAL
      ============================== */}

      <div className="special-recipe">
        <div className="special-image">
          <img
            src="/images/italian-pizza.jpg"
            alt="Italian Cheese Pizza"
          />
        </div>

        <div className="special-content">
          <span className="special-label">
            TODAY'S SPECIAL
          </span>

          <h2>Italian Cheese Pizza</h2>

          <div className="special-rating">
            <span className="stars">★★★★★</span>
            <span>4.9 (120 Reviews)</span>
          </div>

          <p>
            A delicious classic Italian pizza topped with
            cheese, tomatoes, olive and fresh basil.
          </p>

          <button className="special-button">
            View Recipe
            <span>→</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default RecipeSection;