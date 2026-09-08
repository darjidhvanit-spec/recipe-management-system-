import React from "react";
import "./CategorySection.css";

const categories = [
  {
    name: "Breakfast",
    image: "/images/breakfast.jpg",
  },
  {
    name: "Lunch",
    image: "/images/lunch.jpg",
  },
  {
    name: "Dinner",
    image: "/images/Dinner.jpg",
  },
  {
    name: "Snacks",
    image: "/images/snacks.jpg",
  },
  {
    name: "Desserts",
    image: "/images/desserts.jpg",
  },
  {
    name: "Drinks",
    image: "/images/drinks.jpg",
  },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="category-container">

        <div className="category-heading">
          <span>Explore</span>
          <h2>Top Categories</h2>
          <p>
            Discover delicious recipes for every mood and every meal.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category.name}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>

              <h3>{category.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;