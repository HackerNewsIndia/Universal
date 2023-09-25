// AuthRoutes.js
import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Register from "./Registration";
import Dashboard from "./Dashboard";
import ViewPosts from "./ViewPosts";
import PublicBlogSpace from "./PublicBlogSpace";
import Post from "./Post";
// import "./AuthRoutes.css";
// import CreateUserBlog from "./CreateUserBlog";

const AuthRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate("/login");
  //     }
  //   }, [isLoggedIn, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Routes className="authroutes_div">
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={<Login onLogin={() => setIsLoggedIn(true)} />}
      />
      <Route
        path="/register"
        element={<Register onRegister={() => setIsLoggedIn(true)} />}
      />
      {/* {isLoggedIn && (
        <Route
          path="/dashboard"
          element={
            <Dashboard onLogout={logout} user={user} isLoggedIn={isLoggedIn} />
          }
        />
      )} */}
      <Route
        path="/dashboard"
        element={
          <Dashboard onLogout={logout} user={user} isLoggedIn={isLoggedIn} />
        }
      />
      <Route path="/diaryblogSpace" element={<PublicBlogSpace />} />
      <Route
        path="/diaryblog/:blogspace_name/:blogspace_id"
        element={<ViewPosts />}
      />

      {/* <Route path="/post=:postId" element={<Post />} /> */}
      <Route
        path="/company/:blogspace_name/:blogSpaceId/post/:postId"
        element={<Post />}
      />
    </Routes>
  );
};

export default AuthRoutes;
