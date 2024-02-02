import React, { useState } from "react";
import ReactDOM from "react-dom";  // Add this line to import ReactDOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./components/AuthRoutes";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
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
            path="/product"
            element={<Product isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
           <Route
            path="/pricing"
            element={<Pricing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
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
