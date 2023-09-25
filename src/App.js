import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./components/AuthRoutes";
import Navigation from "./components/Navigation";

import "./App.css";

import ReactDOM from "react-dom"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Moved useState inside the component

  return (
    <div className="app_div">
      {/* <h1>UNIVERSE</h1> */}
      <Router>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <AuthRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
