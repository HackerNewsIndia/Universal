import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewPosts.css";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [postSearch, setPostSearch] = useState("");
  const { blogspace_name, blogspace_id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFollowCompany, setCurrentFollowCompany] = useState(null);
  const [emailForFollow, setEmailForFollow] = useState("");
  const [followedCompanies, setFollowedCompanies] = useState([]); // If you need this
  const [followersCount, setFollowersCount] = useState(0);
  const [viewMode, setViewMode] = useState("card");
  const [sortedPosts, setSortedPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (blogspace_id && blogspace_id !== "undefined") {
      fetch(
        `https://diaryblogapi2.onrender.com/api/blogspace/${blogspace_id}/posts`
      )
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));

      // Fetch follower count for the current blogSpace
      fetch(
        `https://diaryblogapi2.onrender.com/api/blogSpace/${blogspace_id}/followers`
      )
        .then((response) => response.json())
        .then((followersData) => {
          setFollowersCount(followersData.userEmails?.length || 0);
        })
        .catch((error) => {
          console.warn(
            `Error fetching followers for blogSpace ID: ${blogspace_id}`,
            error
          );
          setFollowersCount(0);
        });
    } else {
      console.error("blogspace_id is undefined!");
    }
  }, [blogspace_id]);

  const handleChange = (e) => {
    setPostSearch(e.target.value);
  };

  const handleBackClick = () => {
    navigate("/diaryblogSpace");
  };

  console.log(posts);

  // const filteredPosts = posts.filter((post) => {
  //   const title = post.title || "";
  //   const description = post.description || "";

  //   return (
  //     title.toLowerCase().includes(postSearch.toLowerCase()) ||
  //     description.toLowerCase().includes(postSearch.toLowerCase())
  //   );
  // });

  useEffect(() => {
    const sorted = [...posts].sort((a, b) => {
      const dateA = new Date(a.createDate);
      const dateB = new Date(b.createDate);
      return dateB - dateA;
    });
    setSortedPosts(sorted);
  }, [posts]);

  console.log(sortedPosts);

  const filteredPosts = sortedPosts.filter((post) => {
    const title = post.title || "";
    const description = post.description || "";

    return (
      title.toLowerCase().includes(postSearch.toLowerCase()) ||
      description.toLowerCase().includes(postSearch.toLowerCase())
    );
  });

  const handlePostClick = (blogspace_name, blogSpaceId, postId) => {
    navigate(`/company/${blogspace_name}/${blogSpaceId}/post/${postId}`);

    fetch(
      `https://diaryblogapi2.onrender.com/api/posts/${blogspace_name}/${postId}/views`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the view count locally for the post that was clicked.
        const updatedPosts = posts.map((postItem) => {
          if (postItem._id === postId) {
            postItem.views = data.views; // Assuming data.views contains the updated view count.
          }
          return postItem;
        });
        setPosts(updatedPosts); // Update the state with the new post views.
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
    fetch(
      `https://diaryblogapi2.onrender.com/api/blogSpace/${blogspace_id}/follow`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailForFollow }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // No need to update the local state here, unless you want to reflect changes immediately.
          handleCloseModal();
        } else {
          console.error(data.error);
        }
      })
      .catch((error) => console.error("Error following company:", error));
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div>
      <h2 className="blog-heading">{blogspace_name}'s Blog</h2>

      <div style={{ textAlign: "center", margin: "10px 0" }}>
        {/* Follow button */}
        <button
          className="follow-btn-post"
          onClick={() => toggleFollow(blogspace_name)}
        >
          {followedCompanies.includes(blogspace_name) ? "Unfollow" : "Follow"}
        </button>

        {/* Followers count */}
        <span style={{ marginLeft: "10px" }}>
          {followersCount} {followersCount === 1 ? "follower" : "followers"}
        </span>
      </div>

      {/* Modal */}
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

      <form className="form-search" onSubmit={(e) => e.preventDefault()}>
        <div className="search-group">
          <input
            className="search-input"
            type="text"
            placeholder="search posts, company"
            value={postSearch}
            onChange={handleChange}
          />
        </div>
      </form>
      <section className="category-section">
        <div className="category-chips">
          <div className="chip" data-category="all">
            All
          </div>
          <div class="chip" data-category="lastposted">
            Recent Posted
          </div>
          <div class="chip" data-category="lastposted">
            Most Trending Posted
          </div>
          <div class="chip" data-category="geography">
            Geography
          </div>
          <div class="chip" data-category="science">
            Science
          </div>
          <div class="chip" data-category="history">
            History
          </div>
        </div>
      </section>

      <div className="card-container">
        <div className="back-button-container">
          <button className="post-back" onClick={handleBackClick}>
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </button>
          <div className="card-list">
            <button
              className="card-view"
              onClick={() => handleViewModeChange("card")}
            >
              <i class="material-icons">grid_on</i>
            </button>
            <button
              className="list-view"
              onClick={() => handleViewModeChange("list")}
            >
              <i class="material-icons">list</i>
            </button>
          </div>
        </div>
        {viewMode === "card" ? (
          <div className="card-container">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="col-sm-3"
                onClick={() =>
                  handlePostClick(blogspace_name, post.blogSpace, post._id)
                }
              >
                <div className="card text-center">
                  <img
                    src={
                      post.imageUrl ||
                      "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"
                    }
                    className="card-img-top"
                    alt={"image"}
                  />
                  <div className="post-body custom-card-body">
                    <h2 className="post-title">
                      <ReactMarkdown>
                        {post.title.substring(0, 30)}
                      </ReactMarkdown>
                    </h2>
                    <p className="post-text">~{post.author}</p>
                    <p className="post-views">
                      <FontAwesomeIcon icon={faEye} />: {post.views}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="list-head-container">
            <ul className="list-container">
              {filteredPosts.map((post, index) => (
                <li key={index}>
                  <div
                    onClick={() =>
                      handlePostClick(blogspace_name, post.blogSpace, post._id)
                    }
                    className="list-item"
                  >
                    <img
                      src={
                        post.imageUrl ||
                        "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"
                      }
                      alt={"image"}
                      className="list-image"
                    />
                    <div className="list-content">
                      <h2 className="post-title-list">
                        <ReactMarkdown className="title-text">
                          {post.title.substring(0, 30)}
                        </ReactMarkdown>
                      </h2>
                      <div className="post-text-company-list">
                        <p className="post-text-list">
                          {post.description.substring(0, 90)}...{" "}
                          {/* Display only first 100 characters */}
                        </p>
                        <p className="post-company-list">~{post.author}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPosts;
