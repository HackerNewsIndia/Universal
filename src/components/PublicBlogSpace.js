import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PublicBlogSpace.css"; // Importing the CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const PublicBlogSpace = () => {
  const [blogSpace, setBlogSpace] = useState([]);
  const [followedCompanies, setFollowedCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFollowCompany, setCurrentFollowCompany] = useState(null);
  const [emailForFollow, setEmailForFollow] = useState("");
  const [blogSearch, setBlogSearch] = useState("");
  const [followersCounts, setFollowersCounts] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://diaryblogapi2.onrender.com/api/diaryblog_space")
      .then((response) => response.json())
      .then(async (data) => {
        setBlogSpace(data);

        // Fetch followers count for each blogSpace
        const counts = {};
        const promises = data.map(async (bspace) => {
          const response = await fetch(
            `https://diaryblogapi2.onrender.com/api/blogSpace/${bspace._id.$oid}/followers`
          );
          const followersData = await response.json();
          if (response.ok) {
            counts[bspace._id.$oid] = followersData.userEmails?.length || 0;
          } else {
            console.warn(
              `Error fetching followers for blogSpace ID: ${bspace._id.$oid}`,
              followersData
            );
            counts[bspace._id.$oid] = 0;
          }
        });

        // Wait for all fetch operations to complete
        await Promise.all(promises);

        setFollowersCounts(counts);
      })
      .catch((error) =>
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        )
      );
  }, []);

  console.log(blogSpace);

  const generateRandomImageUrls = (count) => {
    const imageUrls = [];
    for (let i = 0; i < count; i++) {
      imageUrls.push(`https://picsum.photos/200/200?random=${i}`);
    }
    return imageUrls;
  };

  // Generate random image URLs once when the component loads
  const randomImageUrls = generateRandomImageUrls(blogSpace.length);

  const handleBlog = (companyData) => {
    const blogId = companyData._id.$oid;
    console.log("Navigating with ID:", companyData.name, blogId);
    navigate(`/diaryblog/${companyData.name}/${blogId}`);
    fetch(`https://diaryblogapi2.onrender.com/api/${blogId}/views`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        updatedBlogSpace = blogSpace.map((blogSpaceItem) => {
          if (blogSpaceItem._id === blogId) {
            blogSpaceItem.views === data.views;
          }
          return blogSpaceItem;
        });
        setBlogSpace(updatedBlogSpace);
      })
      .catch((error) => {
        console.error("Error incrementing views:", error);
      });
  };

  const toggleFollow = (companyName) => {
    setCurrentFollowCompany(companyName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentFollowCompany(null);
    setEmailForFollow("");
  };

  const handleConfirmFollow = () => {
    // Fetch the blogId for the currentFollowCompany
    const companyData = blogSpace.find(
      (company) => company.name === currentFollowCompany
    );
    if (!companyData) return; // Exit if company data not found

    const blogId = companyData._id.$oid;

    fetch(`https://diaryblogapi2.onrender.com/api/blogSpace/${blogId}/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailForFollow }),
    })
      .then((response) => response.json()) // Convert response to json
      .then((data) => {
        if (data.message) {
          setBlogSpace((prevBlogSpace) =>
            prevBlogSpace.map((company) =>
              company.company === currentFollowCompany
                ? { ...company, follower_count: data.follower_count }
                : company
            )
          );
          handleCloseModal();
        } else {
          console.error(data.error);
        }
      })
      .catch((error) => console.error("Error following company:", error));
  };

  const handleChange = (e) => {
    setBlogSearch(e.target.value);
  };

  const filteredBlogSpace = blogSpace.filter((companyData) => {
    const name = companyData.name || ""; // Ensuring 'name' is defined
    return name.toLowerCase().includes(blogSearch.toLowerCase());
  });

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="public-blog-space-container">
      <div className="search-groups">
        <input
          className="search-input"
          type="text"
          placeholder="search blogs"
          value={blogSearch}
          onChange={handleChange}
        />
        {/* <button className="search-button">Search</button> */}
      </div>

      <div className="public-blog-space-subcontainer">
        <button className="blog-back" onClick={handleBackClick}>
          <i className="fas fa-arrow-left" aria-hidden="true"></i>
        </button>
        <div className="public-blog-space-row row">
          {filteredBlogSpace.map((companyData, index) => (
            <div
              key={index}
              className="public-blog-space-col col-sm-3"
              onClick={() => handleBlog(companyData)}
            >
              <div className="public-blog-space-card card text-center">
                <img
                  src={randomImageUrls[index]}
                  className="public-blog-space-card-img card-img-top"
                  alt={"Company Logo"}
                />
                <div className="public-blog-space-card-body post-body custom-card-body">
                  <h2 className="public-blog-space-card-title post-title">
                    {companyData.name}
                  </h2>
                  <div className="follow-btn-no-of-posts">
                    <button
                      className="follow-btn"
                      onClick={(e) => {
                        e.stopPropagation(); // To prevent handleBlog from being called
                        toggleFollow(companyData.name);
                      }}
                    >
                      {followedCompanies.includes(companyData.name)
                        ? "Unfollow"
                        : "Follow"}
                    </button>
                    <p className="public-blog-space-card-text post-text">
                      {companyData.blogPosts.length} Posts
                    </p>
                  </div>
                  <p className="follower_count">
                    Followers: {followersCounts[companyData._id.$oid] || 0}
                  </p>
                  <p className="post-views">
                    <FontAwesomeIcon icon={faEye} />: {companyData.views}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isModalOpen && (
            <div className="follow-modal-backdrop">
              <div className="follow-modal">
                <h2>Follow {currentFollowCompany}</h2>
                <input
                  type="email"
                  value={emailForFollow}
                  onChange={(e) => setEmailForFollow(e.target.value)}
                  placeholder="Enter your email"
                />
                <button onClick={handleConfirmFollow}>Confirm Follow</button>
                <button onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicBlogSpace;
