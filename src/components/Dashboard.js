// Dashboard.jsx
import React, { useEffect, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, StarOutlined, MessageOutlined } from "@mui/icons-material";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { HelpOutline } from "@mui/icons-material";

const DiaryBlogSpace = React.lazy(() => import("DiaryBlogSpace/DiaryBlogSpace"));
const FollowSpace = React.lazy(() => import("FollowSpace/FollowSpace"));

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
      <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar */}
        <div className="w-1/5 bg-blue-800 text-white overflow-y-auto" style={{ width: '20%', height: '250%' }}>
          <Menu
            onClick={(e) => setSelectedKey(e.key)}
            theme="dark"
            mode="vertical"
            className="h-full"
          >
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
            <Menu.Item key="user" icon={<SettingOutlined />}>
              User
            </Menu.Item>

            {isLoggedIn && (
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
                Logout
              </Menu.Item>
            )}
          </Menu>
        </div>

        {/* Right Content Area */}
        <div className="w-4/5 p-4 bg-white">
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
          </Suspense>
        </div>
      </div>
    )
  );
};

export default Dashboard;
