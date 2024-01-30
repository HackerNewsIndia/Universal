import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register({ onRegister, setUser: setGlobalUser }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    license: "",
    diaryblogAccess: false,
    typeitAccess: false,
  });
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  function validateFields() {
    let validationErrors = {};

    if (!user.username.trim()) validationErrors.username = "Name is required.";

    if (!/\S+@\S+\.\S+/.test(user.email))
      validationErrors.email = "Invalid email.";

    if (user.password.length < 8)
      validationErrors.password = "Password must be at least 8 characters.";

    if (user.password !== user.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match.";

    return validationErrors;
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/register",
        user
      );
      console.log(res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        onRegister();

        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <form className="bg-white rounded-lg shadow-md p-8 max-w-md w-full" onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
        />
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="license"
          placeholder="License"
          onChange={handleChange}
        />
        
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            name="diaryblogAccess"
            checked={user.diaryblogAccess}
            onChange={handleCheckboxChange}
          />
          <span className="text-sm">Diary Blog Access</span>
        </label>
        
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            name="typeitAccess"
            checked={user.typeitAccess}
            onChange={handleCheckboxChange}
          />
          <span className="text-sm">Type It Access</span>
        </label>
        
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        <Link className="block text-center mt-2 text-blue-500 hover:text-blue-800" to="/login">
          Already have an account? Login
        </Link>
      </form>
      
    </div>
  );
}

export default Register;
