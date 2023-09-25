import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Card } from "antd";
import {
  HomeOutlined,
  StarOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { HelpOutline } from "@mui/icons-material";
import "./DairyBlogSpace.css";
import BlogCreator from "./BlogCreator";
import CompanyPosts from "./CompanyPosts";
import DashboardContent from "./DashboardContents";
import jwt_decode from "jwt-decode";

function DiaryBlogSpace({ isLoggedIn, setIsLoggedIn }) {
  // const [userDetails, setUserDetails] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [companyData, setCompanyData] = useState([]);

  const navigate = useNavigate();

  const handleNewBlog = (newCompany) => {
    setCompanyData((prevData) => [...prevData, newCompany]);
  };

  const handleCards = (company) => {
    setSelectedCompany(company);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    // Add any additional logout logic you may need.
  };

  console.log("you have selected", selectedCompany);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   async function fetchDetails() {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/users/me", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: token,
  //         },
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setUserDetails(data);
  //       } else {
  //         const errorMessage = await response.text();
  //         throw new Error(errorMessage);
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchDetails();
  // }, [token]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No JWT token found in local storage.");
      return;
    }

    // Decode the JWT token to get the user_id
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;

    fetch(`http://127.0.0.1:5001/api/diaryblog_space/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setCompanyData(data);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
        setError(error.message);
      });
  }, []);

  console.log("Company Data:", companyData);

  return (
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
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Menu.Item>
          )}
        </Menu>
      </div>
      {!selectedKey && (
        <div className="content-body">
          <h1 className="dashboard_heading">Welcome to Dashboard</h1>
          <DashboardContent />
        </div>
      )}
      {selectedKey === "home" && (
        <div className="content-body">
          <h1 className="dashboard_heading">Welcome to Dashboard</h1>
          <DashboardContent />
        </div>
      )}
      {selectedKey === "diaryBlogAdmin" && (
        <div className="content-body">
          {selectedCompany ? (
            <div>
              <h1 className="company_heading">{selectedCompany.company}</h1>
              <button
                className="back_button"
                onClick={() => setSelectedCompany(null)}
              >
                <i className="fas fa-arrow-left" aria-hidden="true"></i>
              </button>
              <CompanyPosts selectedCompany={selectedCompany} />
            </div>
          ) : (
            <React.Fragment>
              <div>
                {error && <p>Error: {error}</p>}
                <div className="content heading_row">
                  <h1 className="dairyBlogAdmin_h1">
                    Web Components That Just Works.
                  </h1>
                </div>
                <br />
                <div className="row">
                  <BlogCreator onNewBlog={handleNewBlog} />
                </div>
                <div className="blog-content">
                  <h3 className="blog-h3">My Blog Space</h3>
                  <div className="blog-card-container">
                    {companyData &&
                      companyData.map((blogSpace) => (
                        <div
                          key={blogSpace._id || blogSpace.name} // using _id as key if available, otherwise using name
                          className="blog-card"
                          onClick={() => handleCards(blogSpace)}
                        >
                          <h4 className="blog-title">{blogSpace.name}</h4>
                          <p>
                            <strong>Category:</strong> {blogSpace.category}
                          </p>
                          <p>
                            <strong>Owner:</strong> {blogSpace.owner}
                          </p>
                          <p>
                            <strong>Created Date:</strong>
                            {blogSpace.createDate
                              ? new Date(
                                  blogSpace.createDate
                                ).toLocaleDateString()
                              : "Loading..."}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default DiaryBlogSpace;
