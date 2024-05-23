import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import ResetPassword from "./ResetPassword";
import Footer from "./Footer"; // Import the Footer component

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleBackToLogin = () => {
    setShowResetPassword(false); // Hide the ResetPassword component
    // Optionally clear any other state or input values here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });

    if (name === "email" && !isValidEmail(value)) {
      setEmailError("Email is invalid. Please try again");
    } else {
      setEmailError("");
    }

    if (name === "password") {
      // Check for minimum length of 8 characters
      if (value.length < 8) {
        setPasswordError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      } else {
        // Use regex to check for at least one uppercase letter, one lowercase letter, one digit, and one special character
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasDigit = /\d/.test(value);
        const hasSpecialChar = /[^a-zA-Z0-9]/.test(value);
  
        if (!hasUpperCase ||!hasLowerCase ||!hasDigit ||!hasSpecialChar) {
          setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        } else {
          setPasswordError("");
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/login",
        credentials
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        onLogin();

        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get("redirectUrl");

        if (redirectUrl) {
          const finalRedirectUrl = `${redirectUrl}?token=${encodeURIComponent(
            res.data.token
          )}`;
          window.location.href = finalRedirectUrl;
        } else {
          navigate("/dashboard");
        }
        console.log(localStorage.getItem("token")); // Log the token to the console
      } else {
        setPasswordError("Incorrect password, please try again.");
      }
    } catch (err) {
      setPasswordError("Incorrect password, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/forgot-password",
        { email: credentials.email }
      );

      if (res.data.success) {
        setOtpSent(true); // Set state to indicate OTP sent
        setShowForgotPassword(true); // Show OTP input field
      } else {
        setEmailError("Email not found. Please try again.");
      }
    } catch (err) {
      setEmailError("Email not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/verify-otp",
        { email: credentials.email, otp }
      );

      if (res.data.success) {
        // Proceed with resetting password
        setShowForgotPassword(false); // Hide OTP input field
        setOtpVerified(true); // Set OTP verification status
        setShowResetPassword(true); // Show ResetPassword component
      } else {
        setPasswordError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setPasswordError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelReset = () => {
    setShowResetPassword(false);
    setOtp(""); // Clear OTP input
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
        
      {!showForgotPassword && !showResetPassword && (

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          onChange={handleChange}
                          className="block w-full rounded-md border-2 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                        />
                        {emailError && (
                          <p className="mt-1 text-sm text-red-500">{emailError}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-md font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                        
                        <div className="text-md">
                          <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowForgotPassword(true);
                            }}
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword? "text" : "password"}
            autoComplete="current-password"
            required
            onChange={handleChange}
            className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-3 cursor-pointer"
          >
            {showPassword? "👁️" : "🔒"}
          </button>
        </div>
        {passwordError && (
          <p className="mt-1 text-sm text-red-500">{passwordError}</p>
        )}
      </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                          "Sign in"
                        )}
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 text-center text-md text-gray-500">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </>
            
              </div>
                    </div>
                        )}
                           
                    </div>
                    
            {showForgotPassword && !showResetPassword && (
          
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 shadow-lg rounded-lg">
          {otpSent ? (
                  <>
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Verify OTP
                    </h2>
                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                      <div>
                        <label
                          htmlFor="otp"
                          className="block text-md font-medium leading-6 text-gray-900"
                        >
                          Enter OTP
                        </label>
                        <div className="mt-2">
                          <input
                            id="otp"
                            name="otp"
                            type="text"
                            autoComplete="off"
                            required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="block w-full rounded-md border-2 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="flex items-center">
                              <span className="mr-2">Verifying OTP</span>
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
                            "Verify OTP"
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Reset Password
                    </h2>
                    <form onSubmit={handleForgotPassword} className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-md font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            onChange={handleChange}
                            className="block w-full rounded-md border-2 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                          />
                          {emailError && (
                            <p className="mt-1 text-sm text-red-500">{emailError}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="flex items-center">
                              <span className="mr-2">Sending OTP</span>
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
                            "Send OTP"
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
              
            )}
        

        {showResetPassword && (
          <ResetPassword email={credentials.email} onCancel={handleBackToLogin} />
        )}
        <Footer />
    </div>
  );
}

export default Login;
