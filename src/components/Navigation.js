import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMobileMenuItem, setSelectedMobileMenuItem] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuLinkClick = (menuItem) => {
    setIsMobileMenuOpen(false);
    setSelectedMobileMenuItem(menuItem);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleProductClick = () => {
    navigate("/product");
    handleMobileMenuLinkClick("Product");
    setIsMobileMenuOpen(false); // Close the mobile menu after navigating
  };

  const handlePricingClick = () => {
    navigate("/pricing");
    handleMobileMenuLinkClick("Pricing");
    setIsMobileMenuOpen(false); // Close the mobile menu after navigating
  };

  const handleUniverseClick = () => {
    navigate("/"); // Assuming your home page path is '/'
    handleMobileMenuLinkClick(null);
  };

  console.log("Is user logged in:", isLoggedIn);

  return (
    <nav className="bg-blue-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
         

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${
                  isMobileMenuOpen ? "block" : "hidden"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
                     <div className="flex-shrink-0">
  <img className="h-8" src="https://universe.connectingpeopletech.com/logo.svg" alt="Logo" style={{ width: 'auto', height: '9rem' }} />
</div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center"></div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold ${
                    pathname === "/" ? "bg-gray-700 text-white" : ""
                  }`}
                  onClick={handleUniverseClick}
                >
                  Universe
                </a>
                <Link
                  to="/Product"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold"
                  onClick={handleProductClick}
                >
                  Product
                </Link>
                <Link
                  to="/Pricing"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold"
                  onClick={() => {
                    navigate("/pricing");
                    handleMobileMenuLinkClick("Pricing");
                  }}
                >
                  Pricing
                </Link>
                <Link
                  to="/faq" // Specify the path to your FAQ page
                  className={`text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleMobileMenuLinkClick("FAQ");
                  }}
                >
                  FAQ
                </Link>
                     {isLoggedIn && (
                <Link
                        to="/dashboard"
                        className={`text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold`}
                        onClick={() => {
                          navigate("/dashboard");
                          handleMobileMenuLinkClick(null);
                        }}
                  >
                        Dashboard
                  </Link>
                )}  
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isLoggedIn ? (
              <button
                className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  logout();
                }} // Close the mobile menu when the login button is clicked
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login" // Specify the path to your login.js file
                className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-semibold"
                onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu when the login button is clicked
              >
                Login <FontAwesomeIcon icon={faArrowRightToBracket} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
              selectedMobileMenuItem === null ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => handleMobileMenuLinkClick(null)}
          >
            Dashboard
          </a>
          <Link
            to="/product"
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
              selectedMobileMenuItem === "Product"
                ? "bg-gray-900 text-white"
                : ""
            }`}
            onClick={() => handleMobileMenuLinkClick("Product")}
          >
            Product
          </Link>
          <Link
            to="/pricing"
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
              selectedMobileMenuItem === "Pricing"
                ? "bg-gray-900 text-white"
                : ""
            }`}
            onClick={() => handleMobileMenuLinkClick("Pricing")}
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
              selectedMobileMenuItem === "Faq" ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => handleMobileMenuLinkClick("Faq")}
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
