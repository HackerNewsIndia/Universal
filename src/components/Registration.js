import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register({ onRegister, setUser: setGlobalUser }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const navigate = useNavigate();

  function validateFields() {
    let validationErrors = {};

    if (!user.username.trim()) validationErrors.username = "Name is required.";

    if (!/\S+@\S+\.\S+/.test(user.email))
      validationErrors.email = "Invalid email.";

    if (user.password.length < 8)
      validationErrors.password = "Password must be at least 8 characters.";

    return validationErrors;
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/register",
        // "http://127.0.0.1:5000/api/register",
        user
      );
      console.log(res);

      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        setVerificationSent(true);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/verify-email",
        // "http://127.0.0.1:5000/verify-email",
        { email: user.email, code: verificationCode }
      );

      if (res.status === 200) {
        alert("email verified successfully");

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
    <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
      {!verificationSent ? (
        <form
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
          onSubmit={handleSubmit}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm self-start">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
              Welcome To Universal
            </h2>
          </div>

          {/* ... other form fields ... */}
          <span class="block mb-1 text-md font-medium text-gray-700">
            User Name
          </span>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
            type="text"
            name="username"
            placeholder="Your full name"
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}

          <span class="block mb-1 text-md font-medium text-gray-700">
            Your Email
          </span>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
            type="email"
            name="email"
            placeholder="Ex. Universal@gmail.com"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}

          <span class="block mb-1 text-md font-medium text-gray-700">
            Create a password
          </span>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}

          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none shadow-sm"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center">
                <span className="mr-2">Loading</span>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            ) : (
              "Register"
            )}
          </button>
          <Link
            className="block text-center mt-2 text-blue-500 hover:text-blue-800"
            to="/login"
          >
            Already have an account? Login
          </Link>
        </form>
      ) : (
        <form
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
          onSubmit={handleVerificationSubmit}
        >
          <input
            className="appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none shadow-sm"
            type="submit"
          >
            Verify Email
          </button>
        </form>
      )}
    </div>
  );
}

export default Register;
