import React, { useState, useEffect } from "react";
// import "./CompanyPosts.css";
import CreateNewPost from "./CreateNewPost";
import PostsTable from "./PostsTable";

const CompanyPosts = ({ selectedCompany }) => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [creatingPost, setCreatingPost] = useState(false);

  console.log({ selectedCompany });

  const fetchPosts = () => {
    if (!selectedCompany || !selectedCompany.name) {
      console.error("selectedCompany.name is not set");
      return;
    }
    fetch(`http://127.0.0.1:5001/api/posts/${selectedCompany.name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCompany.name]);

  const selectStory = (story) => {
    setSelectedStory(story);
  };

  const backToList = () => {
    setSelectedStory(null);
  };

  const startCreatingPost = () => {
    setCreatingPost(true);
  };

  const cancelCreatingPost = () => {
    setCreatingPost(false);
  };

  const addNewStory = (newStory) => {
    fetchPosts();
  };

  return (
    <div className="companyPosts-container">
      {selectedStory ? (
        <div>
          <h1 className=".companyPosts_selectedStory_h1">
            {selectedStory.title}
          </h1>
          <p className=".companyPosts_selectedStory_p">
            {selectedStory.description}
          </p>{" "}
          <button
            className=".companyPosts_selectedStory_button"
            onClick={backToList}
          >
            Back to list
          </button>
        </div>
      ) : creatingPost ? (
        <CreateNewPost
          cancelCreatingPost={cancelCreatingPost}
          selectedCompany={selectedCompany}
          addNewStory={addNewStory}
        />
      ) : (
        <PostsTable
          stories={stories}
          selectStory={selectStory}
          startCreatingPost={startCreatingPost}
          selectedCompany={selectedCompany}
        />
      )}
    </div>
  );
};

export default CompanyPosts;
