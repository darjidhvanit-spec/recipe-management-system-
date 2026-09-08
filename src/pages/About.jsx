import React from "react";
import {
  ChefHat,
  Heart,
  Utensils,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-small-title">
            ABOUT TASTYRECIPE
          </p>

          <h1>
            Cooking Made
            <span> Simple & Delicious</span>
          </h1>

          <p className="about-hero-description">
            Welcome to TastyRecipe, your friendly place for discovering
            delicious, simple and easy-to-follow recipes for every occasion.
            We believe great food brings people together.
          </p>

          <div className="about-hero-buttons">

            <button
              className="about-primary-btn"
              onClick={() => {
                document
                  .getElementById("our-story")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Our Story
            </button>

            <button
              className="about-secondary-btn"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact Us
            </button>

          </div>

        </div>


        {/* =================================================
            HERO IMAGE
        ================================================= */}

        <div className="about-hero-image">

          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=85"
            alt="Cooking delicious food"
          />

          <div className="about-floating-card">

            <div className="about-floating-icon">
              <ChefHat size={25} />
            </div>

            <div>
              <strong>10+</strong>
              <span>Years of Passion</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="about-stat-card">
          <div className="stat-icon">
            <Utensils size={24} />
          </div>

          <strong>2000+</strong>
          <span>Recipes</span>
        </div>


        <div className="about-stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>

          <strong>50K+</strong>
          <span>Food Lovers</span>
        </div>


        <div className="about-stat-card">
          <div className="stat-icon">
            <Heart size={24} />
          </div>

          <strong>100K+</strong>
          <span>Happy Cooks</span>
        </div>


        <div className="about-stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>

          <strong>10+</strong>
          <span>Years Experience</span>
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        id="our-story"
        className="our-story-section"
      >

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=900&q=85"
            alt="People enjoying food together"
          />

        </div>


        <div className="story-content">

          <p className="about-small-title">
            OUR STORY
          </p>

          <h2>
            Food That Brings
            <span> People Together</span>
          </h2>

          <p>
            TastyRecipe started with a simple idea: cooking delicious food
            should not be complicated. We wanted to create a place where
            everyone could discover recipes that are easy to understand,
            enjoyable to prepare and delicious to eat.
          </p>

          <p>
            From quick breakfast ideas to family dinners and special
            desserts, our recipes are created to make everyday cooking
            easier and more enjoyable.
          </p>

          <div className="story-highlight">

            <Sparkles size={25} />

            <div>
              <strong>Our Mission</strong>

              <p>
                To inspire everyone to cook, share and enjoy great food.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="why-section">

        <div className="why-heading">

          <p className="about-small-title">
            WHY TASTYRECIPE
          </p>

          <h2>
            Made For
            <span> Food Lovers</span>
          </h2>

          <p>
            Everything you need to make your everyday cooking easier,
            healthier and more delicious.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              <ChefHat size={28} />
            </div>

            <h3>Easy Recipes</h3>

            <p>
              Simple step-by-step recipes that anyone can follow,
              whether you're a beginner or an experienced cook.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              <Heart size={28} />
            </div>

            <h3>Made With Love</h3>

            <p>
              Every recipe is selected with care to bring delicious
              flavors and enjoyable cooking experiences.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              <Utensils size={28} />
            </div>

            <h3>Fresh Ideas</h3>

            <p>
              Discover new meal ideas, cooking inspiration and tasty
              recipes for every type of occasion.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="values-section">

        <div className="values-content">

          <p className="about-small-title">
            WHAT WE BELIEVE
          </p>

          <h2>
            Good Food,
            <span> Good Mood</span>
          </h2>

          <p>
            We believe food is more than just a meal. It is a way to
            celebrate moments, connect with family and friends and create
            memories that last forever.
          </p>

          <div className="values-list">

            <div>
              <span>01</span>
              <p>Keep recipes simple and practical.</p>
            </div>

            <div>
              <span>02</span>
              <p>Use fresh and delicious ingredients.</p>
            </div>

            <div>
              <span>03</span>
              <p>Make cooking enjoyable for everyone.</p>
            </div>

          </div>

        </div>


        <div className="values-image">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85"
            alt="Delicious meal"
          />

          <div className="values-badge">
            <Heart size={22} fill="currentColor" />
            <span>Made With Love</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div>

          <h2>
            Ready To Cook Something
            <span> Delicious?</span>
          </h2>

          <p>
            Explore our recipes and bring something tasty to your table.
          </p>

        </div>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Explore Recipes
        </button>

      </section>

    </div>
  );
};

export default About;