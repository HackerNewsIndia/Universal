import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Home from "./Home";
import "./Dashboard.css";
const DiaryBlogSpace = React.lazy(() =>
  import("DiaryBlogSpace/DiaryBlogSpace")
);

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
        <Suspense fallback={"loading..."}>
          <DiaryBlogSpace isLoggedIn={isLoggedIn} setIsLoggedIn={onLogout} />
        </Suspense>
      </div>
    )
  );
};

export default Dashboard;
