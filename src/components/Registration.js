import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

function Register({ onRegister, setUser: setGlobalUser }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const navigate = useNavigate();

  function validateFields() {
    let validationErrors = {};

    if (!user.username.trim()) validationErrors.username = "Name is required.";

    if (!/\S+@\S+\.\S+/.test(user.email))
      validationErrors.email = "Invalid email.";

    const passwordValidationRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordValidationRegex.test(user.password)) {
      validationErrors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    return validationErrors;
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
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
        "https://usermgtapi-msad.onrender.com/api/register",
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
        "https://usermgtapi-msad.onrender.com/api/verify-email",
        { email: user.email, code: verificationCode }
      );

      if (res.status === 200) {
        alert("Email verified successfully");

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
    <div>
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

            <span className="block mb-1 text-md font-medium text-gray-700">
              User Name
            </span>
            <input
              className="appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
              type="text"
              name="username"
              placeholder="Your full name"
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}

            <span className="block mb-1 text-md font-medium text-gray-700">
              Your Email
            </span>
            <input
              className="appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
              type="email"
              name="email"
              placeholder="Ex. Universal@gmail.com"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}

            <span className="block mb-1 text-md font-medium text-gray-700">
              Create a password
            </span>
            <div className="relative">
              <input
                className="appearance-none border rounded w-full py-2 px-3 mb-4 leading-tight focus:outline-none shadow-sm"
                type={showPassword ? "text" : "password"} // Dynamically change input type
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
              <button
                type="button"
                onClick={toggleShowPassword} // Toggle password visibility
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? "👁️" : "🔒"}{" "}
                {/* Conditionally display eye or lock icon */}
              </button>
            </div>
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
                      strokeWidth="4"
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
      <Footer />
    </div>
  );
}

export default Register;
