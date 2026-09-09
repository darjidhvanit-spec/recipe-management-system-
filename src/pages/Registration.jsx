import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaUtensils,
  FaCheckCircle,
} from "react-icons/fa";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.password) {
      setError("Please enter a password.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Save registered user in localStorage
      localStorage.setItem(
        "recipeUser",
        JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
        })
      );

      setLoading(false);
      setSuccess("Account created successfully! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }, 800);
  };

  return (
    <div className="register-page">
      {/* Left Food Hero Section */}
      <div className="register-food-section">
        <div className="food-overlay"></div>

        <div className="food-content">
          <div className="food-logo">
            <FaUtensils />
            <span>TastyRecipe</span>
          </div>

          <span className="food-label">JOIN OUR COOKING COMMUNITY</span>

          <h1>
            Cook.
            <br />
            Share.
            <br />
            <span>Inspire.</span>
          </h1>

          <p>
            Join thousands of food lovers, discover mouth-watering recipes,
            and share your own culinary masterpieces with the world.
          </p>

          <div className="register-food-info">
            <div>
              <strong>10k+</strong>
              <span>Food Lovers</span>
            </div>

            <div>
              <strong>5000+</strong>
              <span>Shared Recipes</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Registration Form Section */}
      <div className="register-form-section">
        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
          title="Back to Home"
        >
          <FaArrowLeft />
        </button>

        <div className="register-card">
          <div className="mobile-logo">
            <FaUtensils />
            <span>
              Tasty<span>Recipe</span>
            </span>
          </div>

          <div className="register-heading">
            <span className="welcome-text">CREATE YOUR ACCOUNT</span>
            <h2>
              Join Our Foodie <span>Family!</span>
            </h2>
            <p>Sign up now to explore and save your favorite recipes.</p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="register-success">
              <FaCheckCircle />
              <span>{success}</span>
            </div>
          )}

          {/* Error Message */}
          {error && <div className="register-error">{error}</div>}

          <form onSubmit={handleRegister}>
            {/* Full Name */}
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <FaUser />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <FaLock />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <FaLock />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="register-options">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the{" "}
                  <a href="#terms" onClick={(e) => e.preventDefault()}>
                    Terms &amp; Conditions
                  </a>{" "}
                  and Privacy Policy
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="submit-register"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="register-divider">
            <span>OR</span>
          </div>

          <button
            className="guest-btn"
            onClick={() => navigate("/")}
          >
            Continue as Guest
          </button>

          <p className="register-footer-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              Login Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
