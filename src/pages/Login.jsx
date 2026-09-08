import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaUtensils,
} from "react-icons/fa";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    if (!email.trim()) {

      setError("Please enter your email.");

      return;

    }

    if (!password.trim()) {

      setError("Please enter your password.");

      return;

    }

    if (!email.includes("@")) {

      setError("Please enter a valid email.");

      return;

    }


    setLoading(true);


    setTimeout(() => {

      localStorage.setItem(
        "recipeUser",
        JSON.stringify({
          email: email.trim(),
        })
      );

      setLoading(false);

      navigate("/");

    }, 800);

  };


  return (

    <div className="login-page">


      {/* Left Food Section */}

      <div className="login-food-section">

        <div className="food-overlay"></div>

        <div className="food-content">

          <div className="food-logo">
            <FaUtensils />
            <span>TastyRecipe</span>
          </div>

          <span className="food-label">
            WELCOME TO TASTYRECIPE
          </span>

          <h1>
            Cook.
            <br />
            Create.
            <br />
            <span>Enjoy.</span>
          </h1>

          <p>
            Discover delicious recipes, fresh ingredients
            and simple cooking ideas for every day.
          </p>


          <div className="login-food-info">

            <div>
              <strong>2000+</strong>
              <span>Recipes</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Ingredients</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Fresh</span>
            </div>

          </div>

        </div>

      </div>


      {/* Right Login Section */}

      <div className="login-form-section">

        <button
          className="back-home-btn"
          onClick={() => navigate("/login")}
        >
          <FaArrowLeft />
        </button>


        <div className="login-card">

          <div className="mobile-logo">

            <FaUtensils />

            <span>
              Tasty<span>Recipe</span>
            </span>

          </div>


          <div className="login-heading">

            <span className="welcome-text">
              WELCOME BACK
            </span>

            <h2>
              Let's Cook Something
              <span> Delicious!</span>
            </h2>

            <p>
              Login to explore your favorite recipes.
            </p>

          </div>


          <form onSubmit={handleLogin}>


            {/* Email */}

            <div className="input-group">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>


            {/* Password */}

            <div className="input-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <FaLock />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>


            {/* Error */}

            {error && (

              <div className="login-error">
                {error}
              </div>

            )}


            {/* Options */}

            <div className="login-options">

              <label className="remember">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot Password?
              </button>

            </div>


            {/* Login */}

            <button
              type="submit"
              className="submit-login"
              disabled={loading}
            >

              {loading
                ? "Signing in..."
                : "Login"
              }

            </button>


          </form>


          <div className="login-divider">
            <span>OR</span>
          </div>


          <button
            className="guest-btn"
            onClick={() => navigate("/")}
          >
            Continue as Guest
          </button>


          <p className="login-footer-text">
            New to TastyRecipe?
            <span>
              Create Account
            </span>
          </p>

        </div>

      </div>

    </div>

  );
};

export default Login;