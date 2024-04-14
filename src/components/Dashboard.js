// Dashboard.jsx
import React, { useEffect, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  StarOutlined,
  MessageOutlined,
  FeaturedVideoOutlined,
} from "@mui/icons-material";

import {
  SettingOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faAngleLeft,
  faAngleRight,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { HelpOutline } from "@mui/icons-material";

const DiaryBlogSpace = React.lazy(() =>
  import("DiaryBlogSpace/DiaryBlogSpace")
);
const FollowSpace = React.lazy(() => import("FollowSpace/FollowSpace"));

const Dashboard = ({ onLogout, user, isLoggedIn }) => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isIconActive, setIsIconActive] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOnMouseEnter = () => {
    setIsIconActive(true);
  };
  const handleOnMouseLeave = () => {
    setIsIconActive(false);
  };

  return (
    isLoggedIn && (
      <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar */}
        <div className="relative">
          {isSidebarOpen && (
            <div
              className="w-14 md:w-full lg:w-full  bg-blue-800 text-white overflow-y-auto"
              style={{ height: "100%" }}
            >
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
                <Menu.Item
                  key="digitalMarketing"
                  icon={<FeaturedVideoOutlined />}
                >
                  Digital Marketing
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
          )}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 ml-1 cursor-pointer"
            style={{ left: "100%" }}
          >
            {isSidebarOpen ? (
              <div
                onClick={() => {
                  toggleSidebar();
                }}
                style={{ fontSize: "20px" }}
                onMouseLeave={() => {
                  handleOnMouseLeave();
                }}
                onMouseEnter={() => {
                  handleOnMouseEnter();
                }}
              >
                {isIconActive ? (
                  <FontAwesomeIcon icon={faAngleLeft} />
                ) : (
                  <FontAwesomeIcon icon={faGripLinesVertical} />
                )}
              </div>
            ) : (
              <div
                onClick={() => {
                  toggleSidebar();
                }}
                style={{ fontSize: "20px" }}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            )}
          </div>
        </div>

        {/* Right Content Area */}
        <div
          className="w-full p-10 bg-white overflow-y-auto"
          style={{
            height: "100%",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
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
