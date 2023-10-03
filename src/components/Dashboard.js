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
              <Menu.Item key="typeltAdmin" icon={<MessageOutlined />}>
                Typelt Admin
              </Menu.Item>
              <Menu.Item key="help" icon={<HelpOutline />}>
                Ask Admin
              </Menu.Item>
              <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
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
          </Suspense>
        </div>
      </div>
    )
  );
};

export default Dashboard;
