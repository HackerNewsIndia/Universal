import React, { useEffect, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Home from "./Home";
import "./Dashboard.css";
import { Menu, Card } from "antd";
import {
  HomeOutlined,
  StarOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { HelpOutline } from "@mui/icons-material";

const DiaryBlogSpace = React.lazy(() =>
  import("DiaryBlogSpace/DiaryBlogSpace")
);
const FollowSpace = React.lazy(() => import("FollowSpace/FollowSpace"));
// const TypeitSpace = React.lazy(() => import("TypeitSpace/TypeitSpace"));

const Dashboard = ({ onLogout, user, isLoggedIn }) => {
  const navigate = useNavigate();

  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    // Add any additional logout logic you may need.
  };

  //const goToUserPage = () => {
    // Navigate to the user page
//    navigate("/user");
  //};


  return (
    isLoggedIn && (
      <div className="dashboard_div">
        <h1>Welcome</h1>
      </div>
    )
  );
};

export default Dashboard;
