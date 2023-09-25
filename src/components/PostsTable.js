// PostsTable.js

import React, { useState, useEffect } from "react";
import "./PostsTable.css";
import "font-awesome/css/font-awesome.min.css";

const PostsTable = ({
  stories,
  selectStory,
  startCreatingPost,
  selectedCompany,
}) => {
  const [localStories, setLocalStories] = useState([]);

  useEffect(() => {
    setLocalStories(stories);
  }, [stories]);

  const sortedStories = localStories.sort((a, b) => {
    return new Date(a.timestamp) - new Date(b.timestamp);
  });
  console.log([sortedStories]);

  // const sortedStories = [...stories].sort((a, b) => {
  //   return new Date(b.timestamp) - new Date(a.timestamp);
  // });

  const handleDeletePost = (story) => {
    console.log(story);

    fetch(
      `http://127.0.0.1:5001/api/posts/${selectedCompany.name}/${story._id}`,
      { method: "DELETE" }
    )
      .then((response) => {
        if (!response.ok) {
          // Log additional details
          console.error("Status Code:", response.status);
          return response.text().then((text) => {
            console.error("Response Body:", text);
            throw new Error("Response was not ok!");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const updatedStories = localStories.filter(
          (localStory) => localStory._id !== story._id
        );
        setLocalStories(updatedStories);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const handleIncrementViews = (story) => {
    console.log(story);

    fetch(
      `http://127.0.0.1:5001/api/posts/${selectedCompany.name}/${story._id}/views`,
      { method: "PUT" }
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedStories = localStories.map((localStory) => {
          if (localStory.id === story.id) {
            localStory.views = data.views;
          }
          return localStory;
        });
        setLocalStories(updatedStories);
      })
      .catch((error) => {
        console.error("Error incrementing views:", error);
      });
  };

  return (
    <div>
      <button className="create-blog-button" onClick={startCreatingPost}>
        CREATE NEW POST
      </button>
      <h1 className="blog-heading">List Of Post</h1>
      <div className="table-container">
        <table className="story-table">
          <thead className="postsTable-thead">
            <tr className="postsTable-tr">
              <th className="postsTable-th">Title</th>
              <th className="postsTable-th">View</th>
              <th className="postsTable-th">Delete Post</th>
            </tr>
          </thead>
          <tbody className="postsTable-tbody">
            {sortedStories.map((story) => (
              <tr className="postsTable-tr" key={story.id}>
                <td className="postsTable-td">{story.title}</td>
                <td className="postsTable-td">
                  <button
                    className="postsTable-view"
                    onClick={() => {
                      selectStory(story);
                      handleIncrementViews(story);
                    }}
                  >
                    View
                  </button>
                </td>
                <td className="postsTable-td">
                  <button
                    className="post-delete"
                    onClick={() => {
                      handleDeletePost(story);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;
