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
  User,
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
  const [currentUser, setCurrentUser] = useState(null);

  // Helper to extract clean user display name
  const getUserDisplayName = (user) => {
    if (!user) return "";
    if (typeof user === "string") {
      if (user.includes("@")) {
        const namePart = user.split("@")[0];
        return namePart.charAt(0).toUpperCase() + namePart.slice(1);
      }
      return user;
    }
    if (user.name) return user.name;
    if (user.email) {
      const namePart = user.email.split("@")[0];
      return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
    return "Chef";
  };

  // Check and sync user state
  const syncUser = () => {
    try {
      const stored = localStorage.getItem("recipeUser");
      if (stored) {
        const parsed = JSON.parse(stored);
        setCurrentUser(parsed);
      } else {
        setCurrentUser(null);
      }
    } catch {
      const stored = localStorage.getItem("recipeUser");
      if (stored) {
        setCurrentUser({ name: stored });
      } else {
        setCurrentUser(null);
      }
    }
  };

  // Listen for storage changes, route changes & custom authChange events
  useEffect(() => {
    syncUser();

    const handleStorage = () => syncUser();
    window.addEventListener("storage", handleStorage);
    window.addEventListener("authChange", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("authChange", handleStorage);
    };
  }, [location.pathname]);

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
    setCurrentUser(null);
    window.dispatchEvent(new Event("authChange"));
    setMenuOpen(false);
    navigate("/login");
  };

  const displayName = getUserDisplayName(currentUser);
  const userInitial = displayName ? displayName.charAt(0).toUpperCase() : "U";

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

          {/* MOBILE USER / LOGIN / LOGOUT ACTIONS */}
          <div className="mobile-actions">
            {currentUser ? (
              <div className="mobile-user-box">
                <div className="mobile-user-info">
                  <div className="user-avatar-circle">
                    {userInitial}
                  </div>
                  <div className="user-text-info">
                    <span className="user-greeting-label">Welcome back,</span>
                    <span className="user-display-name">{displayName}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="logout-nav-btn mobile-btn"
                  onClick={handleLogout}
                >
                  <LogOut size={16} className="btn-icon" />
                  <span>Logout</span>
                </button>
              </div>
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

        {/* DESKTOP USER PROFILE & ACTIONS */}
        <div className="navbar-actions">
          {currentUser ? (
            <div className="user-profile-wrapper">
              <div className="user-avatar-badge" title={`Logged in as ${displayName}`}>
                <div className="user-avatar-circle">
                  {userInitial}
                </div>
                <div className="user-text-info">
                  <span className="user-greeting-label">Welcome,</span>
                  <span className="user-display-name">{displayName}</span>
                </div>
              </div>

              <button
                type="button"
                className="logout-nav-btn"
                onClick={handleLogout}
                title="Logout from TastyRecipe"
              >
                <LogOut size={16} className="btn-icon" />
                <span>Logout</span>
              </button>
            </div>
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