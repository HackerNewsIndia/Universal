import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ImageUploader = ({ onImageUpload }) => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;

      reader.onload = (e) => {
        current.src = e.target.result;

        // Get base64 representation of the image
        const base64Image = e.target.result.split(",")[1];

        // Pass base64 image data to the parent component
        onImageUpload(base64Image);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        accept="image/*,application/pdf,.pdf"
        onChange={handleImageUpload}
        ref={imageUploader}
        className="hidden"
      />
      <div
        className="h-60 w-60 border-2 border-dashed border-black"
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          className="w-full h-full object-cover"
          alt="Uploaded"
        />
      </div>
      <p
        className="mt-2 cursor-pointer text-blue-500"
        onClick={() => imageUploader.current.click()}
      >
        Click to upload Image
      </p>
    </div>
  );
};

const User = () => {
  // console.log('User Token:', userToken);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [newUserLinkedIn, setNewUserLinkedIn] = useState("");
  const [newUserTwitter, setNewUserTwitter] = useState("");
  const [newUserGitHub, setNewUserGitHub] = useState("");
  const [newUserImage, setNewUserImage] = useState(null);

  const handleLinkedInChange = (event) => {
    setNewUserLinkedIn(event.target.value);
  };

  const handleTwitterChange = (event) => {
    setNewUserTwitter(event.target.value);
  };

  const handleGitHubChange = (event) => {
    setNewUserGitHub(event.target.value);
  };

  const handleImageUpload = (base64Image) => {
    console.log("Base64 Image Data:", base64Image);
    setNewUserImage(base64Image);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found in local storage");
        return;
      }

      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;

      const userData = {
        user_id: userId,
        linkedin: newUserLinkedIn,
        twitter: newUserTwitter,
        github: newUserGitHub,
        image_base64: newUserImage,
      };

      const response = await axios.post(
        "https://usermgtapi-msad.onrender.com/api/update_user",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userId}`,
          },
        }
      );

      const newUser = response.data;

      setUsers((prevUsers) => [...prevUsers, newUser]);
      setNewUserLinkedIn("");
      setNewUserTwitter("");
      setNewUserGitHub("");
      setNewUserImage("");
      alert("User saved successfully!");
    } catch (error) {
      console.error("Error adding new user:", error);
      console.error("Error details:", error.toJSON());
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
      alert("Error adding a new user. Please try again.");
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            LinkedIn URL:
          </label>
          <input
            type="text"
            value={newUserLinkedIn}
            onChange={handleLinkedInChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            Twitter URL:
          </label>
          <input
            type="text"
            value={newUserTwitter}
            onChange={handleTwitterChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            GitHub URL:
          </label>
          <input
            type="text"
            value={newUserGitHub}
            onChange={handleGitHubChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />

          {/* Add ImageUploader component */}
          <ImageUploader onImageUpload={handleImageUpload} />

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md "
            >
              Save
            </button>
          </div>
        </form>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm-p:md:grid-cols-2">
          {users.map((user) => (
            <div key={user._id}>
              <div className="flex justify-around mt-4">
                {user.linkedin && (
                  <a
                    href={user.linkedin}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {user.github && (
                  <a
                    href={user.github}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {user.twitter && (
                  <a
                    href={user.twitter}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                )}
              </div>

              {/* Display user image */}
              {user.image && (
                <div className="mt-4 ">
                  <img
                    src={`https://usermgtapi-msad.onrender.com/${user.image}`}
                    alt="User"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
