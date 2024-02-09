import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserLinkedIn, setNewUserLinkedIn] = useState('');
  const [newUserTwitter, setNewUserTwitter] = useState('');
  const [newUserGitHub, setNewUserGitHub] = useState('');

  const handleInputChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleLinkedInChange = (event) => {
    setNewUserLinkedIn(event.target.value);
  };

  const handleTwitterChange = (event) => {
    setNewUserTwitter(event.target.value);
  };

  const handleGitHubChange = (event) => {
    setNewUserGitHub(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to add a new user
      await axios.post('https://diaryblogapi2.onrender.com/api/users', {
        name: newUserName,
        linkedin: newUserLinkedIn,
        twitter: newUserTwitter,
        github: newUserGitHub,
      });

      // Clear the input fields
      setNewUserName('');
      setNewUserLinkedIn('');
      setNewUserTwitter('');
      setNewUserGitHub('');
    } catch (error) {
      console.error('Error adding new user:', error);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {/* Form for adding new users */}
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
             User Name:
          </label>
          <input
            type="text"
            value={newUserName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
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
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
            Save
          </button>
        </form>

        {/* Display user data fetched from the backend */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm-p:md:grid-cols-2">
          {users.map(user => (
            <div key={user._id}>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {user.name}
              </h2>
              
              {/* Display links or other data from the user object */}
              <div className="flex justify-around mt-4">
                {user.linkedin && (
                  <a href={user.linkedin} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
                
                {user.github && (
                  <a href={user.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {user.twitter && (
                  <a href={user.twitter} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
