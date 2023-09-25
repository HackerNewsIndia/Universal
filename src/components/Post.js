import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const { blogSpaceId, postId } = useParams();
  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post details here using the companyName and postId
    console.log("Company:", blogSpaceId, "PostId:", postId);
    fetch(`http://127.0.0.1:5001/api/companies/${blogSpaceId}/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch post details");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log("Error fetching post details", error);
      });
  }, [blogSpaceId, postId]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-card mb-3">
      <div className="post-img-container">
        <button className="post-back" onClick={handleBackClick}>
          <i className="fas fa-arrow-left" aria-hidden="true"></i>
        </button>
        <img
          src={post.imageUrl || "path-to-default-image.jpg"}
          alt={`Image for ${post.title}`}
          className="card-img"
        />
      </div>
      <div className="post-content-container">
        <h1 className="post-card-title">{post.title}</h1>
        <p className="post-card-text">
          <ReactMarkdown>{post.description}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default Post;
