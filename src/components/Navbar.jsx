import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Utensils,
  LayoutGrid,
  Sparkles,
  PhoneCall,
  LogIn,
  LogOut,
  ChefHat,
} from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { path: "/", label: "Home", icon: Home },
  { path: "/recipes", label: "Recipes", icon: Utensils },
  { path: "/categories", label: "Categories", icon: LayoutGrid },
  { path: "/about", label: "About Us", icon: Sparkles },
  { path: "/contact", label: "Contact", icon: PhoneCall },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLoggedIn = localStorage.getItem("recipeUser");

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("recipeUser");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-badge">
            <ChefHat className="chef-icon" size={22} />
          </div>
          <span className="logo-text">
            Tasty<span>Recipe</span>
          </span>
        </Link>

        {/* NAVIGATION MENU */}
        <nav className={`nav-menu ${menuOpen ? "mobile-open" : ""}`}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-icon-box">
                  <Icon className="nav-icon" size={17} />
                </span>
                <span className="nav-text">{item.label}</span>
                {isActive && <span className="active-dot-indicator" />}
              </Link>
            );
          })}

          {/* MOBILE LOGIN / LOGOUT */}
          <div className="mobile-actions">
            {isLoggedIn ? (
              <button
                type="button"
                className="login-btn mobile-btn"
                onClick={handleLogout}
              >
                <LogOut size={17} className="btn-icon" />
                <span>Logout</span>
              </button>
            ) : (
              <button
                type="button"
                className="login-btn mobile-btn"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
              >
                <LogIn size={17} className="btn-icon" />
                <span>Login</span>
              </button>
            )}
          </div>
        </nav>

        {/* DESKTOP LOGIN / LOGOUT */}
        <div className="navbar-actions">
          {isLoggedIn ? (
            <button
              type="button"
              className="login-btn"
              onClick={handleLogout}
            >
              <LogOut size={17} className="btn-icon" />
              <span>Logout</span>
            </button>
          ) : (
            <button
              type="button"
              className="login-btn"
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
            >
              <LogIn size={17} className="btn-icon" />
              <span>Login</span>
            </button>
          )}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;