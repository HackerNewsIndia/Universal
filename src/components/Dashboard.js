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

  const goToUserPage = () => {
    // Navigate to the user page
    navigate("/user");
  };


  return (
    isLoggedIn && (
      <div className="dashboard_div">
        {/* <h2>Welcome to the Universe Dashboard</h2> */}
        {/* <button onClick={handleClick}>Create Blog Space</button> */}
        <div className="menu-container">
          <div className="left-side">
            <Menu onClick={(e) => setSelectedKey(e.key)}>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="diaryBlogAdmin" icon={<StarOutlined />}>
                DiaryBlog Admin
              </Menu.Item>
              <Menu.Item key="typeitAdmin" icon={<MessageOutlined />}>
                Typelt Admin
              </Menu.Item>
              <Menu.Item key="followAdmin" icon={<MessageOutlined />}>
                Follow Admin
              </Menu.Item>
              <Menu.Item key="help" icon={<HelpOutline />}>
                Ask Admin
              </Menu.Item>
              <Menu.Item key="settings" icon={<SettingOutlined />} onClick={goToUserPage}>
                User
              </Menu.Item>
           
              {isLoggedIn && ( // Conditionally render the Logout button
                <Menu.Item
                  key="logout"
                  icon={<LogoutOutlined />}
                  onClick={logout}
                >
                  Logout
                </Menu.Item>
              )}
            </Menu>
          </div>
        </div>
        <div className="diaryblog">
          <Suspense fallback={"loading..."}>
            <DiaryBlogSpace
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={onLogout}
              selectedKey={selectedKey}
            />
            <FollowSpace
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={onLogout}
              selectedKey={selectedKey}
            />
            {/* <TypeitSpace
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={onLogout}
              selectedKey={selectedKey}
            /> */}
          </Suspense>
        </div>
      </div>
    )
  );
};

export default Dashboard;
