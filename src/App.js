import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./components/AuthRoutes";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Dashboard from './components/Dashboard';  // Import the Dashboard component

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app_div">
       <Router>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <AuthRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          
          <Route
            path="/product"
            element={<Product isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/pricing"
            element={<Pricing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/faq"
            element={<Faq isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
       </Router>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("app"));
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", renderApp);
}
