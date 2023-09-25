import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css";

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
      const res = await axios.post("http://127.0.0.1:5000/api/register", user);
      console.log(res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        // const userRes = await axios.get("http://127.0.0.1:5000/api/user", {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // });

        // onRegister(userRes.data);
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
    <div className="register_div">
      <form className="register_form" onSubmit={handleSubmit}>
        <input
          className="register_input"
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.username}</p>}
        <input
          className="register_input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          className="register_input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          className="register_input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <input
          className="register_input"
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
        />
        <input
          className="register_input"
          type="text"
          name="license"
          placeholder="License"
          onChange={handleChange}
        />
        <label className="register_label">
          <input
            className="register_checkbox"
            type="checkbox"
            name="diaryblogAccess"
            checked={user.diaryblogAccess}
            onChange={handleCheckboxChange}
          />
          Diary Blog Access
        </label>
        <label className="register_label">
          <input
            className="register_checkbox"
            type="checkbox"
            name="typeitAccess"
            checked={user.typeitAccess}
            onChange={handleCheckboxChange}
          />
          Type It Access
        </label>
        <button className="register_button" type="submit">
          Register
        </button>
        <Link className="login_link" to="/login">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
