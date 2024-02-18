import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MessagingComponent from "./MessagingComponent";
import Profile from "./profile";
import AddTeachersDetails from "./AddTeachersDetails";
import AddStudentDetails from "./AddStudentDetails";
import StudentDetails from "./StudentDetails.jsx";
import Reviews from "./Reviews.jsx";
import ManageAccount from "./ManageAccount.jsx";
import Login from "../HEADER/Login.jsx";
import { CgMenu, CgCloseR } from "react-icons/cg";
const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768); // Set initial state based on device width
  const [selectedOption, setSelectedOption] = useState("dashboard"); // Default selected option
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Run effect only once on component mount

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    // Check if the user is authenticated from localStorage
    const authenticated = localStorage.getItem("authenticated") === "true";
    setIsLoggedIn(authenticated);

    // If authenticated, set the selected option to 'profile'
    if (authenticated) {
      setSelectedOption("profile");
    }
  }, []);

  const handleItemClick = (option) => {
    if (!isLoggedIn) {
      alert("Please login first");
      return;
    }
    setSelectedOption(option);
    setShowSidebar(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setSelectedOption("profile");
  };

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className={`col-2 ${showSidebar ? "" : "d-none d-md-block"}`}>
          <div className="sidebar-offcanvas-content ">
            <div className="sidebar-navbar pt-1">
              <div className="w-100 p-2 d-flex justify-content-end">
                <CgCloseR
                  className=" h2 close-outline mobile-nav-icon text-white"
                  onClick={() => toggleSidebar(false)}
                />
              </div>

              <button
                className={`btn-sidebar ${
                  selectedOption === "profile" ? "active" : ""
                }`}
                onClick={() => handleItemClick("profile")}
              >
                My Profile
              </button>
              <button
                className={`btn-sidebar ${
                  selectedOption === "message" ? "active" : ""
                }`}
                onClick={() => handleItemClick("message")}
              >
                Message
              </button>

              <button
                className={`btn-sidebar ${
                  selectedOption === "StudentDetails" ? "active" : ""
                }`}
                onClick={() => handleItemClick("StudentDetails")}
              >
                StudentDetails
              </button>

              <button
                className={`btn-sidebar ${
                  selectedOption === "AddStudentDetails" ? "active" : ""
                }`}
                onClick={() => handleItemClick("AddStudentDetails")}
              >
                AddStudentDetails
              </button>

              <button
                className={`btn-sidebar ${
                  selectedOption === "AddTeachersDetails" ? "active" : ""
                }`}
                onClick={() => handleItemClick("AddTeachersDetails")}
              >
                AddTeachersDetails
              </button>

              <button
                className={`btn-sidebar ${
                  selectedOption === "reviews" ? "active" : ""
                }`}
                onClick={() => handleItemClick("reviews")}
              >
                Reviews
              </button>

              <button
                className={`btn-sidebar ${
                  selectedOption === "manage-account" ? "active" : ""
                }`}
                onClick={() => handleItemClick("manage-account")}
              >
                Manage Account
              </button>

              <button className="btn-sidebar">Logout</button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-10 col-xs-11 ">
          <button className="btn toggle-button d-md-none  ">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon  h1"
              onClick={() => toggleSidebar(true)}
            />
          </button>

          <div className="Dashboardcontent">
            {isLoggedIn ? (
              <>{selectedOption === "dashboard" && <div></div>}</>
            ) : (
              <>
                <Login onSuccess={handleLoginSuccess} />
              </>
            )}

            {selectedOption === "profile" && <Profile />}
            {selectedOption === "message" && <MessagingComponent />}
            {selectedOption === "StudentDetails" && <StudentDetails />}

            {selectedOption === "AddStudentDetails" && <AddStudentDetails />}
            {selectedOption === "AddTeachersDetails" && <AddTeachersDetails />}
            {selectedOption === "reviews" && <Reviews />}
            {selectedOption === "manage-account" && <ManageAccount />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
