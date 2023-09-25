import React, { useState, useEffect } from "react";
import "./DashboardContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEye } from "@fortawesome/free-solid-svg-icons";
// import ViewPosts from "./ViewPosts";
import { Link } from "react-router-dom";

function TotalViewsThirtyDays() {
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://127.0.0.1:5001/api/blogpost/last30daysviews`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTotalViews(data.total_views_last_30_days);
      })
      .catch((error) => console.error("Error fetching views:", error));
  }, []);

  return (
    <div className="total-views-container">
      <div className="total-views-card">
        <h6 className="total-views-heading">#Total_Views_for_Last_30_days </h6>
        <h1 className="total-views-count">
          <FontAwesomeIcon icon={faEye} />
          {totalViews}
        </h1>
      </div>
    </div>
  );
}

function timeSince(timeString) {
  if (!timeString) return "Invalid timestamp";

  const now = new Date();
  const timestamp = new Date(timeString); // Convert the ISO string to a Date object

  if (isNaN(timestamp.getTime())) return "Invalid date";

  const secondsPast = Math.floor((now - timestamp) / 1000);

  if (secondsPast < 60) return `${secondsPast} seconds ago`;
  if (secondsPast < 3600) return `${Math.floor(secondsPast / 60)} minutes ago`;
  if (secondsPast <= 86400)
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  if (secondsPast <= 86400 * 30) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
  if (secondsPast <= 86400 * 365) {
    const months = Math.floor(secondsPast / (86400 * 30));
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(secondsPast / (86400 * 365));
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

const LatestPost = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5001/api/latest_post", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching the post:", error);
      });
  }, []);
  console.log(post);
  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div className="latest-post-container">
      <h6 className="latest-post-heading">#Latest Post</h6>
      <div className="latest-post-card">
        <div className="latest-post-image">
          <img src={post.imageUrl} alt={post.title} />
        </div>
        <div className="latest-post-title">
          <h2>{post.title}</h2>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} />{" "}
            {post && post.createDate ? formatDate(post.createDate) : "No date"}{" "}
            {"("}
            {timeSince(new Date(post.createDate))}
            {")"}
          </p>
          <p>
            <FontAwesomeIcon icon={faEye} /> {post.views}
          </p>
        </div>
      </div>
    </div>
  );
};

const DraftsList = (company, title) => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    // Fetch drafts when component mounts
    fetch("http://127.0.0.1:5001/api/drafts")
      .then((response) => response.json())
      .then((data) => {
        setDrafts(data);
        console.log(data.map((draft) => draft.timestamp));
      })
      .catch((error) => {
        console.error("Error fetching drafts:", error);
      });
  }, []);

  const handleDraftDelete = (company, title) => {
    console.log(company, title);
    fetch(`http://127.0.0.1:5001/api/drafts/${company}/${title}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not okay");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDrafts((prevDrafts) =>
          prevDrafts.filter(
            (draft) => !(draft.title === title && draft.company === company)
          )
        );
      })
      .catch((error) => {
        console.error("Error deleting draft:", error);
      });
  };

  // const time = draft.timestamp;

  return (
    <div className="drafts-container">
      <h6 className="drafts-heading">#Drafts</h6>
      <ul className="drafts-list">
        {drafts.map((draft, index) => (
          <li className="drafts-item" key={index}>
            <img
              className="drafts-image"
              src={draft.imageUrl}
              alt={draft.title}
            />
            <div className="drafts-details">
              <h6 className="drafts-title">{draft.title}</h6>
              <p className="drafts-content">{draft.content.substring(0, 30)}</p>
            </div>
            <p className="drafts-time">{timeSince(draft.timestamp)}</p>
            <button
              className="delete-draft"
              onClick={() => {
                handleDraftDelete(draft.company, draft.title);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DashboardContent = () => {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    // Fetch data from backend API
    fetch("http://127.0.0.1:5001/api/posts/latest_post")
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="user-and-viewposts">
        <h4 className="user">{cardData.user_id}</h4>
        <div className="viewposts-dashboard">
          <Link className="view_posts_link" to="/diaryblog">
            <i className="fas fa-edit"></i> View Posts
          </Link>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-content-left">
          <div className="total-views">
            <TotalViewsThirtyDays />
          </div>
          <div className="latest-post">
            <LatestPost />
          </div>
        </div>
        <div className="dashboard-content-right">
          <div className="drafts-section">
            <DraftsList company={cardData.company} title={cardData.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
