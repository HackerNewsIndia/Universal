import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token or any other user data
    setIsLoggedIn(false); // Update isLoggedIn state in parent component
    navigate('/login'); // Use navigate to redirect to the login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <h1 className="text-3xl font-bold mb-4">Logout Page</h1> */}
      <h1 className="text-lg font-bold mb-8">You Have Successfully Logged Out.
       Click The Button To Login
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </div>
  );
};

export default Logout;
