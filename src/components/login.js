import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login({ onLogin, setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });

    if (name === "email" && !isValidEmail(value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }

    if (name === "password" && value.length < 8) {
      setPasswordError("Password must be atleast 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    try {
      const res = await axios.post(
        "https://usermgtapi3.onrender.com/api/login",
        credentials
      );
      console.log(res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        // const userRes = await axios.get("http://127.0.0.1:5000/api/user", {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // });

        // onLogin(userRes.data);
        onLogin();

        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="login_div">
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          className="login_input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {emailError && <p className="email-error">{emailError}</p>}
        <input
          className="login_input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {passwordError && <p className="password-error">{passwordError}</p>}
        <button className="login_button" type="submit">
          Login
        </button>
        <Link className="register_link" to="/register">
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
