// Navigation.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  console.log("Is user logged in:", isLoggedIn);
  return (
    <div className="navigation_div">
      <h1 className="navigation_h1">UNIVERSE</h1>

      <nav className="navigation_nav">
        <Link className="home_link" to="/">
          <i className="fas fa-home"></i> Home
        </Link>

        <div className="center_nav_items">
          {!isLoggedIn &&
            pathname !== "/login" &&
            pathname !== "/register" &&
            pathname !== "/dashboard" && (
              <>
                <Link className="login_link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
                <Link className="register_link" to="/register">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
                <Link className="view_post_link" to="/diaryblog">
                  <i className="fas fa-edit"></i> View Posts
                </Link>
              </>
            )}

          {isLoggedIn && (
            <button className="logout_button" onClick={logout}>
              <i class="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
