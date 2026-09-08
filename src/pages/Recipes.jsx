import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  X,
  Heart,
  Clock,
  Users,
  Flame,
  Star,
  ChefHat,
  SlidersHorizontal,
  Sparkles,
  Utensils,
  CheckCircle2,
  Coffee,
  Sun,
  Moon,
  Cake,
  Apple,
  RotateCcw,
} from "lucide-react";
import "./Recipes.css";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Breakfast", icon: Coffee },
  { name: "Lunch", icon: Sun },
  { name: "Dinner", icon: Moon },
  { name: "Dessert", icon: Cake },
  { name: "Snacks", icon: Apple },
];

const allRecipesData = [
  {
    id: 1,
    name: "Italian Cheese Pizza",
    category: "Dinner",
    image: "/images/italian-pizza.jpg",
    rating: 4.9,
    reviews: 210,
    time: "35 mins",
    timeMinutes: 35,
    servings: 4,
    calories: "650 kcal",
    difficulty: "Medium",
    description:
      "A classic Italian pizza topped with fresh mozzarella, sun-ripened tomatoes, aromatic olive oil, and organic basil leaves on a hand-tossed crispy crust.",
    ingredients: [
      "1 ball Fresh pizza dough",
      "1/2 cup San Marzano tomato sauce",
      "200g Fresh mozzarella cheese",
      "1 tbsp Extra virgin olive oil",
      "Fresh basil leaves",
      "1 tsp Dried oregano & sea salt",
    ],
    instructions: [
      "Preheat your oven to 475°F (245°C) with a pizza stone if available.",
      "Roll out and stretch the dough on a floured surface to 12-inch round.",
      "Spread tomato sauce evenly, leaving a 1/2-inch border for the crust.",
      "Tear fresh mozzarella into pieces and scatter evenly over sauce.",
      "Bake for 12 to 15 minutes until cheese is bubbly and crust is golden brown.",
      "Drizzle with olive oil and garnish with fresh basil leaves before serving.",
    ],
  },
  {
    id: 2,
    name: "Fluffy Berry Pancakes",
    category: "Breakfast",
    image: "/images/berry-pancakes.jpg",
    rating: 4.8,
    reviews: 120,
    time: "20 mins",
    timeMinutes: 20,
    servings: 2,
    calories: "380 kcal",
    difficulty: "Easy",
    description:
      "Golden, ultra-fluffy buttermilk pancakes loaded with wild blueberries and strawberries, drizzled with pure amber maple syrup.",
    ingredients: [
      "1.5 cups All-purpose flour",
      "3.5 tsp Baking powder",
      "1 tbsp Pure cane sugar",
      "1.25 cups Milk",
      "1 Egg",
      "3 tbsp Melted butter",
      "Fresh blueberries & strawberries",
      "Pure maple syrup",
    ],
    instructions: [
      "In a large bowl, whisk together flour, baking powder, sugar, and a pinch of salt.",
      "Make a well in the center and pour in milk, egg, and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour batter onto the griddle, using approximately 1/4 cup for each pancake.",
      "Cook until bubbles form on surface, then flip and cook until browned on the other side.",
      "Stack high and top with fresh berries and warm maple syrup.",
    ],
  },
  {
    id: 3,
    name: "Creamy Garlic Fettuccine",
    category: "Lunch",
    image: "/images/creamy-pasta.jpg",
    rating: 4.9,
    reviews: 150,
    time: "25 mins",
    timeMinutes: 25,
    servings: 3,
    calories: "520 kcal",
    difficulty: "Easy",
    description:
      "Tender fettuccine tossed in a rich, velvety garlic parmesan cream sauce, finished with cracked black pepper and fresh parsley.",
    ingredients: [
      "350g Fettuccine pasta",
      "1 cup Heavy whipping cream",
      "4 Garlic cloves, minced",
      "1/2 cup Freshly grated parmesan",
      "3 tbsp Unsalted butter",
      "Fresh parsley, finely chopped",
      "Cracked black pepper & sea salt",
    ],
    instructions: [
      "Cook fettuccine in boiling salted water according to package directions until al dente.",
      "In a large skillet over medium heat, melt butter and sauté garlic for 1-2 minutes.",
      "Pour in heavy cream and bring to a gentle simmer for 3 minutes.",
      "Stir in parmesan cheese until completely melted and smooth.",
      "Drain pasta and toss directly in the sauce until evenly coated.",
      "Garnish with chopped parsley and freshly cracked pepper.",
    ],
  },
  {
    id: 4,
    name: "Avocado & Egg Crunch Toast",
    category: "Breakfast",
    image: "/images/avocado-toast.jpg",
    rating: 4.6,
    reviews: 98,
    time: "15 mins",
    timeMinutes: 15,
    servings: 2,
    calories: "290 kcal",
    difficulty: "Easy",
    description:
      "Artisan toasted sourdough smeared with creamy seasoned avocado, topped with chili flakes, cherry tomatoes, and microgreens.",
    ingredients: [
      "2 thick slices Sourdough bread",
      "1 Ripe Hass avocado",
      "1 tbsp Fresh lemon juice",
      "1/2 cup Cherry tomatoes, halved",
      "Red chili flakes & everything bagel seasoning",
      "Extra virgin olive oil",
    ],
    instructions: [
      "Toast bread slices until golden brown and crispy.",
      "In a small bowl, mash avocado with lemon juice, salt, and black pepper.",
      "Spread mashed avocado generously over toasted sourdough.",
      "Arrange cherry tomato halves on top.",
      "Sprinkle with chili flakes, seasoning, and a drizzle of olive oil.",
    ],
  },
  {
    id: 5,
    name: "Mediterranean Garden Salad",
    category: "Lunch",
    image: "/images/healthy-salad.jpg",
    rating: 4.7,
    reviews: 86,
    time: "15 mins",
    timeMinutes: 15,
    servings: 2,
    calories: "210 kcal",
    difficulty: "Easy",
    description:
      "Crisp organic greens, English cucumbers, heirloom cherry tomatoes, Kalamata olives, and feta cheese tossed in herb vinaigrette.",
    ingredients: [
      "4 cups Mixed salad greens",
      "1 English cucumber, sliced",
      "1 cup Cherry tomatoes",
      "100g Feta cheese, crumbled",
      "1/3 cup Kalamata olives",
      "3 tbsp Extra virgin olive oil",
      "1 tbsp Red wine vinegar & oregano",
    ],
    instructions: [
      "Wash and thoroughly dry all salad greens.",
      "In a large serving bowl, combine greens, cucumber slices, and tomatoes.",
      "Whisk olive oil, red wine vinegar, dried oregano, salt, and pepper for dressing.",
      "Pour dressing over salad and toss gently to coat.",
      "Top with crumbled feta cheese and whole Kalamata olives.",
    ],
  },
  {
    id: 6,
    name: "Gourmet Herb Steak Platter",
    category: "Dinner",
    image: "/images/Dinner.jpg",
    rating: 4.8,
    reviews: 175,
    time: "40 mins",
    timeMinutes: 40,
    servings: 2,
    calories: "720 kcal",
    difficulty: "Hard",
    description:
      "Prime cut steak pan-seared to perfection with garlic herb butter, accompanied by roasted rosemary baby potatoes and asparagus.",
    ingredients: [
      "2 Prime Ribeye or NY Strip steaks",
      "3 tbsp Butter",
      "3 sprigs Fresh rosemary & thyme",
      "4 Garlic cloves, smashed",
      "250g Baby potatoes",
      "1 bunch Fresh asparagus",
      "Coarse sea salt & black peppercorns",
    ],
    instructions: [
      "Pat steaks dry and season generously with coarse salt and pepper 30 mins before cooking.",
      "Roast baby potatoes and asparagus at 400°F (200°C) with olive oil for 25 mins.",
      "Heat a cast iron skillet over high heat until smoking hot.",
      "Sear steak for 4 minutes, flip and add butter, garlic, rosemary, and thyme.",
      "Baste steak with foaming aromatic butter for another 3-4 minutes.",
      "Transfer to a board and rest 6-8 minutes before slicing.",
    ],
  },
  {
    id: 7,
    name: "Strawberry Cream Cheesecake",
    category: "Dessert",
    image: "/images/desserts.jpg",
    rating: 4.9,
    reviews: 190,
    time: "45 mins",
    timeMinutes: 45,
    servings: 6,
    calories: "450 kcal",
    difficulty: "Medium",
    description:
      "Velvety New York style cheesecake with a buttery graham crust, topped with fresh strawberry glaze and whipped cream.",
    ingredients: [
      "1.5 cups Graham cracker crumbs",
      "500g Cream cheese, softened",
      "3/4 cup Granulated sugar",
      "2 Large eggs",
      "1 tsp Vanilla extract",
      "1 cup Fresh strawberries, sliced",
      "3 tbsp Strawberry fruit glaze",
    ],
    instructions: [
      "Mix graham crumbs with melted butter and press firmly into a 9-inch springform pan.",
      "Beat cream cheese and sugar until creamy; add eggs one at a time, then vanilla.",
      "Pour filling over crust and smooth the top with a spatula.",
      "Bake at 325°F (165°C) for 40-45 minutes until center is slightly set.",
      "Cool completely, refrigerate for 4 hours, and top with strawberries and glaze.",
    ],
  },
  {
    id: 8,
    name: "Crispy Golden Potato Wedges",
    category: "Snacks",
    image: "/images/snacks.jpg",
    rating: 4.7,
    reviews: 105,
    time: "20 mins",
    timeMinutes: 20,
    servings: 4,
    calories: "240 kcal",
    difficulty: "Easy",
    description:
      "Hand-cut russet potatoes baked to golden perfection with smoked paprika, garlic, rosemary, and sea salt.",
    ingredients: [
      "4 Large Russet potatoes, scrubbed",
      "3 tbsp Olive oil",
      "1 tsp Smoked paprika",
      "1 tsp Garlic powder",
      "1/2 tsp Onion powder",
      "Fresh parsley & sea salt",
    ],
    instructions: [
      "Cut each potato lengthwise into 8 even wedges.",
      "Soak wedges in cold water for 15 minutes, then pat completely dry.",
      "Toss with olive oil, paprika, garlic powder, onion powder, salt, and pepper.",
      "Arrange in a single layer on a parchment-lined baking sheet.",
      "Bake at 400°F (200°C) for 25 minutes, flipping halfway until crispy and golden.",
      "Garnish with chopped parsley and serve with dipping sauce.",
    ],
  },
  {
    id: 9,
    name: "Sparkling Citrus Cooler",
    category: "Snacks",
    image: "/images/drinks.jpg",
    rating: 4.9,
    reviews: 160,
    time: "5 mins",
    timeMinutes: 5,
    servings: 2,
    calories: "110 kcal",
    difficulty: "Easy",
    description:
      "A revitalizing blend of freshly squeezed Valencia oranges, lime juice, aromatic mint, and sparkling water on crushed ice.",
    ingredients: [
      "3 Fresh oranges, juiced",
      "1 Lime, juiced",
      "1 cup Sparkling mineral water",
      "1 tbsp Honey or agave nectar",
      "Fresh mint sprigs",
      "Crushed ice & orange slices",
    ],
    instructions: [
      "In a cocktail shaker or pitcher, muddle fresh mint leaves with honey and lime juice.",
      "Add fresh orange juice and shake with ice.",
      "Strain into tall glasses filled with fresh crushed ice.",
      "Top with sparkling water and stir gently.",
      "Garnish with fresh orange wheels and mint sprigs.",
    ],
  },
  {
    id: 10,
    name: "Classic Sunrise Platter",
    category: "Breakfast",
    image: "/images/breakfast.jpg",
    rating: 4.9,
    reviews: 145,
    time: "15 mins",
    timeMinutes: 15,
    servings: 2,
    calories: "420 kcal",
    difficulty: "Easy",
    description:
      "Hearty morning delight featuring sunny-side up organic eggs, golden hash browns, grilled sausages, and warm buttered toast.",
    ingredients: [
      "4 Organic eggs",
      "2 Golden hash brown patties",
      "4 Breakfast sausage links",
      "4 slices Artisan bread",
      "2 tbsp Salted butter",
      "Fresh chives & black pepper",
    ],
    instructions: [
      "Fry hash browns in a skillet until crisp and golden brown on both sides.",
      "Cook breakfast sausages until browned throughout.",
      "Gently fry eggs in butter sunny-side up with runny yolks.",
      "Toast bread slices and brush with melted butter.",
      "Plate all components together and sprinkle eggs with chives and cracked pepper.",
    ],
  },
  {
    id: 11,
    name: "Mediterranean Grain Bowl",
    category: "Lunch",
    image: "/images/lunch.jpg",
    rating: 4.8,
    reviews: 132,
    time: "25 mins",
    timeMinutes: 25,
    servings: 2,
    calories: "490 kcal",
    difficulty: "Medium",
    description:
      "Nourishing bowl of fluffy tri-color quinoa, roasted chickpeas, spiced grilled protein, homemade hummus, and lemon tahini drizzle.",
    ingredients: [
      "1 cup Tri-color quinoa, cooked",
      "1 cup Roasted chickpeas",
      "200g Grilled chicken or crispy tofu",
      "1/2 cup Creamy hummus",
      "1 cup Diced cucumbers & cherry tomatoes",
      "2 tbsp Creamy tahini dressing",
    ],
    instructions: [
      "Cook quinoa in vegetable broth for maximum flavor.",
      "Roast seasoned chickpeas in the oven until crispy.",
      "Divide warm quinoa between two wide bowls.",
      "Arrange chicken/tofu, chickpeas, fresh diced veggies, and a scoop of hummus on top.",
      "Drizzle with lemon tahini dressing and serve warm.",
    ],
  },
  {
    id: 12,
    name: "Chef's Decadent Chocolate Lava",
    category: "Dessert",
    image: "/images/food-img.jpg",
    rating: 4.9,
    reviews: 220,
    time: "30 mins",
    timeMinutes: 30,
    servings: 4,
    calories: "540 kcal",
    difficulty: "Medium",
    description:
      "Warm, rich Belgian dark chocolate cake with a molten oozing center, served with vanilla bean ice cream and raspberry coulis.",
    ingredients: [
      "200g High quality bittersweet chocolate",
      "1/2 cup Unsalted butter",
      "3 Large eggs + 2 egg yolks",
      "1/3 cup Granulated sugar",
      "1/4 cup All-purpose flour",
      "Vanilla bean ice cream & raspberries",
    ],
    instructions: [
      "Butter four 6-ounce ramekins and dust with cocoa powder.",
      "Melt dark chocolate and butter together in a heatproof bowl set over simmering water.",
      "In a separate bowl, whisk eggs, egg yolks, and sugar until thick and pale.",
      "Gently fold chocolate mixture and flour into the eggs until combined.",
      "Divide batter among ramekins and bake at 425°F (220°C) for 12 minutes.",
      "Invert onto dessert plates and serve immediately with vanilla ice cream.",
    ],
  },
];

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(urlSearch);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [maxTime, setMaxTime] = useState(60);
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  // Sync search input with URL search param if changed
  useEffect(() => {
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [urlSearch]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("tastyRecipeFavorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error("Error loading favorites", e);
      }
    }
  }, []);

  // Toggle favorite recipe
  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((favId) => favId !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("tastyRecipeFavorites", JSON.stringify(updated));
  };

  // Toggle ingredient checklist item in modal
  const toggleIngredient = (ingredient) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  // Handle Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ search: searchTerm.trim() });
    } else {
      setSearchParams({});
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setSelectedDifficulty("All");
    setMaxTime(60);
    setSortBy("popular");
    setShowFavoritesOnly(false);
    setSearchParams({});
  };

  // Filter and Sort Recipes
  const filteredRecipes = useMemo(() => {
    return allRecipesData
      .filter((recipe) => {
        // Search term matching (name, category, description, ingredients)
        const term = searchTerm.toLowerCase().trim();
        const matchesSearch =
          !term ||
          recipe.name.toLowerCase().includes(term) ||
          recipe.category.toLowerCase().includes(term) ||
          recipe.description.toLowerCase().includes(term) ||
          recipe.ingredients.some((ing) => ing.toLowerCase().includes(term));

        // Category matching
        const matchesCategory =
          activeCategory === "All" || recipe.category === activeCategory;

        // Difficulty matching
        const matchesDifficulty =
          selectedDifficulty === "All" ||
          recipe.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

        // Cooking time matching
        const matchesTime = recipe.timeMinutes <= maxTime;

        // Favorites matching
        const matchesFav = !showFavoritesOnly || favorites.includes(recipe.id);

        return (
          matchesSearch &&
          matchesCategory &&
          matchesDifficulty &&
          matchesTime &&
          matchesFav
        );
      })
      .sort((a, b) => {
        if (sortBy === "popular") return b.rating - a.rating;
        if (sortBy === "time") return a.timeMinutes - b.timeMinutes;
        if (sortBy === "reviews") return b.reviews - a.reviews;
        return 0;
      });
  }, [
    searchTerm,
    activeCategory,
    selectedDifficulty,
    maxTime,
    sortBy,
    favorites,
    showFavoritesOnly,
  ]);

  return (
    <div className="recipes-page">
      {/* ==============================
          HERO BANNER & SEARCH
      ============================== */}
      <section className="recipes-banner">
        <div className="recipes-banner-content">
          <div className="banner-tag">
            <Sparkles size={16} />
            <span>Over 2,500+ Chef-Crafted Recipes</span>
          </div>

          <h1>
            Discover Delicious <span>Recipes</span>
          </h1>

          <p className="banner-desc">
            Explore easy step-by-step guides, curated culinary ideas, and
            healthy dishes made with fresh ingredients.
          </p>

          {/* Search Bar */}
          <form className="recipes-search-form" onSubmit={handleSearchSubmit}>
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or cuisines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => {
                  setSearchTerm("");
                  setSearchParams({});
                }}
              >
                <X size={18} />
              </button>
            )}
            <button type="submit" className="recipes-search-btn">
              Search
            </button>
          </form>
        </div>

        <div className="recipes-banner-visual">
          <div className="banner-image-box">
            <img src="/images/food-img.jpg" alt="Chef Special Platter" />
            <div className="banner-stat-badge">
              <Flame size={20} className="flame-icon" />
              <div>
                <strong>Trending Now</strong>
                <p>Italian Pizza & Pastas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          CATEGORIES & CONTROLS
      ============================== */}
      <section className="recipes-controls-section">
        {/* Category Pill Tabs */}
        <div className="category-scroll-bar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={cat.name}
                className={`category-pill ${isActive ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <Icon size={17} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Filter & Sort Bar */}
        <div className="filter-sort-bar">
          {/* Difficulty Filter */}
          <div className="filter-group">
            <span className="filter-label">Difficulty:</span>
            <div className="filter-pills">
              {["All", "Easy", "Medium", "Hard"].map((diff) => (
                <button
                  key={diff}
                  className={`small-pill ${
                    selectedDifficulty === diff ? "active" : ""
                  }`}
                  onClick={() => setSelectedDifficulty(diff)}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Time Filter Slider */}
          <div className="filter-group time-group">
            <span className="filter-label">
              <Clock size={16} /> Max Time: <strong>{maxTime} mins</strong>
            </span>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={maxTime}
              onChange={(e) => setMaxTime(Number(e.target.value))}
              className="time-slider"
            />
          </div>

          {/* Sort By Dropdown */}
          <div className="sort-group">
            <SlidersHorizontal size={16} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-dropdown"
            >
              <option value="popular">Highest Rated</option>
              <option value="time">Fastest Cook Time</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>

          {/* Favorites Filter Toggle */}
          <button
            className={`fav-toggle-btn ${showFavoritesOnly ? "active" : ""}`}
            onClick={() => setShowFavoritesOnly((prev) => !prev)}
          >
            <Heart
              size={17}
              className={showFavoritesOnly ? "fill-heart" : ""}
            />
            <span>Favorites ({favorites.length})</span>
          </button>
        </div>
      </section>

      {/* ==============================
          RECIPE GRID & RESULTS
      ============================== */}
      <section className="recipes-grid-section">
        {/* Results Header */}
        <div className="results-header">
          <h2>
            {showFavoritesOnly ? "Your Favorite Recipes" : "All Recipes"}
            <span className="results-count">({filteredRecipes.length})</span>
          </h2>

          {(searchTerm ||
            activeCategory !== "All" ||
            selectedDifficulty !== "All" ||
            maxTime < 60 ||
            showFavoritesOnly) && (
            <button className="reset-all-btn" onClick={handleClearFilters}>
              <RotateCcw size={15} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Recipes Cards Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="recipes-grid">
            {filteredRecipes.map((recipe) => {
              const isFav = favorites.includes(recipe.id);

              return (
                <div
                  key={recipe.id}
                  className="recipe-item-card"
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    setCheckedIngredients({});
                  }}
                >
                  {/* Card Image Box */}
                  <div className="card-image-box">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      loading="lazy"
                    />

                    {/* Category Badge */}
                    <span className="card-category-badge">
                      {recipe.category}
                    </span>

                    {/* Difficulty Badge */}
                    <span
                      className={`card-difficulty-badge diff-${recipe.difficulty.toLowerCase()}`}
                    >
                      {recipe.difficulty}
                    </span>

                    {/* Favorite Button */}
                    <button
                      type="button"
                      className={`card-fav-btn ${isFav ? "favorited" : ""}`}
                      onClick={(e) => toggleFavorite(recipe.id, e)}
                      aria-label="Save to favorites"
                    >
                      <Heart size={18} className={isFav ? "fill-heart" : ""} />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    {/* Rating and Time Row */}
                    <div className="card-meta-row">
                      <div className="card-rating">
                        <Star size={15} className="star-icon" />
                        <strong>{recipe.rating}</strong>
                        <span>({recipe.reviews})</span>
                      </div>

                      <div className="card-time">
                        <Clock size={14} />
                        <span>{recipe.time}</span>
                      </div>
                    </div>

                    <h3 className="card-title">{recipe.name}</h3>

                    <p className="card-description">{recipe.description}</p>

                    {/* Card Footer */}
                    <div className="card-footer">
                      <div className="card-servings">
                        <Users size={14} />
                        <span>{recipe.servings} Servings</span>
                      </div>

                      <button className="card-view-btn">
                        <span>View Recipe</span>
                        <Utensils size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-results-box">
            <div className="no-results-icon">🍲</div>
            <h3>No matching recipes found</h3>
            <p>
              We couldn't find any recipes matching your current search or filter
              criteria. Try changing your filters or searching for something
              else!
            </p>
            <button className="reset-search-btn" onClick={handleClearFilters}>
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* ==============================
          FEATURE HIGHLIGHTS
      ============================== */}
      <section className="recipes-features-card">
        <div className="feature-box">
          <span className="feature-icon-badge">🥕</span>
          <div>
            <h4>Fresh & Clean Ingredients</h4>
            <p>Quality ingredients chosen for wholesome, nutritious cooking.</p>
          </div>
        </div>

        <div className="feature-box">
          <span className="feature-icon-badge">⏱️</span>
          <div>
            <h4>Quick & Easy Steps</h4>
            <p>Tested step-by-step instructions designed for any skill level.</p>
          </div>
        </div>

        <div className="feature-box">
          <span className="feature-icon-badge">👨‍🍳</span>
          <div>
            <h4>Master Chef Tested</h4>
            <p>Authentic recipes perfected by passionate culinary experts.</p>
          </div>
        </div>

        <div className="feature-box">
          <span className="feature-icon-badge">❤️</span>
          <div>
            <h4>Save Your Favorites</h4>
            <p>Bookmark your top dishes for quick access anytime you cook.</p>
          </div>
        </div>
      </section>

      {/* ==============================
          RECIPE DETAILS MODAL
      ============================== */}
      {selectedRecipe && (
        <div
          className="recipe-modal-backdrop"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="recipe-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              className="modal-close-btn"
              onClick={() => setSelectedRecipe(null)}
            >
              <X size={22} />
            </button>

            {/* Modal Image Header */}
            <div className="modal-hero">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
              />
              <div className="modal-hero-overlay">
                <span className="modal-category">
                  {selectedRecipe.category}
                </span>
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            {/* Modal Info Bar */}
            <div className="modal-meta-bar">
              <div className="meta-stat">
                <Clock size={18} className="meta-icon" />
                <div>
                  <small>Prep Time</small>
                  <strong>{selectedRecipe.time}</strong>
                </div>
              </div>

              <div className="meta-stat">
                <Users size={18} className="meta-icon" />
                <div>
                  <small>Servings</small>
                  <strong>{selectedRecipe.servings} People</strong>
                </div>
              </div>

              <div className="meta-stat">
                <Flame size={18} className="meta-icon" />
                <div>
                  <small>Calories</small>
                  <strong>{selectedRecipe.calories}</strong>
                </div>
              </div>

              <div className="meta-stat">
                <ChefHat size={18} className="meta-icon" />
                <div>
                  <small>Difficulty</small>
                  <strong>{selectedRecipe.difficulty}</strong>
                </div>
              </div>

              <div className="meta-stat">
                <Star size={18} className="meta-icon star-colored" />
                <div>
                  <small>Rating</small>
                  <strong>{selectedRecipe.rating} ★ ({selectedRecipe.reviews})</strong>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body-grid">
              {/* Left Column: Ingredients */}
              <div className="modal-ingredients-section">
                <h3>
                  <span>Ingredients</span>
                  <small>({selectedRecipe.ingredients.length} items)</small>
                </h3>
                <p className="ingredients-tip">
                  Click on an ingredient to check it off your list:
                </p>

                <ul className="ingredients-list">
                  {selectedRecipe.ingredients.map((ing, idx) => {
                    const isChecked = !!checkedIngredients[ing];
                    return (
                      <li
                        key={idx}
                        className={`ingredient-item ${
                          isChecked ? "checked" : ""
                        }`}
                        onClick={() => toggleIngredient(ing)}
                      >
                        <CheckCircle2
                          size={18}
                          className={`check-icon ${
                            isChecked ? "is-checked" : ""
                          }`}
                        />
                        <span>{ing}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Column: Instructions */}
              <div className="modal-instructions-section">
                <h3>Cooking Instructions</h3>
                <ol className="instructions-list">
                  {selectedRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="instruction-step">
                      <span className="step-num">{idx + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                className={`modal-fav-action-btn ${
                  favorites.includes(selectedRecipe.id) ? "favorited" : ""
                }`}
                onClick={(e) => toggleFavorite(selectedRecipe.id, e)}
              >
                <Heart
                  size={18}
                  className={
                    favorites.includes(selectedRecipe.id) ? "fill-heart" : ""
                  }
                />
                <span>
                  {favorites.includes(selectedRecipe.id)
                    ? "Saved to Favorites"
                    : "Save to Favorites"}
                </span>
              </button>

              <button
                className="modal-done-btn"
                onClick={() => setSelectedRecipe(null)}
              >
                Done Cooking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;