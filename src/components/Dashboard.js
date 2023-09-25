import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Home from "./Home";
import DiaryBlogSpace from "./DairyBlogSpace";
import "./Dashboard.css";

const Dashboard = ({ onLogout, user, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    isLoggedIn && (
      <div className="dashboard_div">
        {/* <h2>Welcome to the Universe Dashboard</h2> */}
        {/* <button onClick={handleClick}>Create Blog Space</button> */}
        <DiaryBlogSpace isLoggedIn={isLoggedIn} setIsLoggedIn={onLogout} />
      </div>
    )
  );
};

export default Dashboard;
