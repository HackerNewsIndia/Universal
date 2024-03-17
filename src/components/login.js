import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Footer from "./Footer";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });

    if (name === "email" && !isValidEmail(value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }

    if (name === "password" && value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/login",
        // "http://127.0.0.1:5000/api/login",
        credentials
      );

      console.log("Response:", res); // Log the response object for debugging

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        onLogin();

        const currentUrl = window.location.href;
        // const hashIndex = currentUrl.indexOf("#");
        // const urlWithoutHash =
        //   hashIndex !== -1 ? currentUrl.substring(0, hashIndex) : currentUrl;
        // !const urlWithoutHash = currentUrl.replace("#/", "");
        // console.log(urlWithoutHash);
        // const urlParams = new URLSearchParams(urlWithoutHash);
        // const redirectUrl = decodeURIComponent(urlParams.get("redirectUrl"));
        // console.log(redirectUrl);

        // if (redirectUrl) {
        //   // const redirectUrl = urlParams.get("redirectUrl");
        //   const finalRedirectUrl = `${redirectUrl}?token=${encodeURIComponent(
        //     res.data.token
        //   )}`;
        //   window.location.href = finalRedirectUrl;
        // } else {
        navigate("/dashboard");
        // }
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error("Error:", err); // Log the error object for debugging
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

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
                  <p className="mt-2 text-sm text-red-500">{emailError}</p>
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
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {passwordError && (
                  <p className="mt-2 text-sm text-red-500">{passwordError}</p>
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
      </div>
    </div>
<Footer/>
                </div>
  );
}

export default Login;
