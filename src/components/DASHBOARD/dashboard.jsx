import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessagingComponent from './MessagingComponent';
import CreateListingComponent from './CreateListingComponent';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768); // Set initial state based on device width
  const [selectedOption, setSelectedOption] = useState('dashboard'); // Default selected option

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 768); // Update showSidebar state on window resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run effect only once on component mount

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className={`col-3 bg-light ${showSidebar ? '' : 'd-none d-md-block'}`}>
  <div className="sidebar-offcanvas-content">
    <div className="sidebar-navbar">
      {/* <img src="logo.png" alt="Logo" className="navbar-logo" /> */}
      <button className={`btn btn-sidebar ${selectedOption === 'profile' ? 'active' : ''}`} onClick={() => handleItemClick('profile')}>My Profile</button>
      <button className={`btn btn-sidebar ${selectedOption === 'add-student' ? 'active' : ''}`} onClick={() => handleItemClick('add-student')}>Add Student Detail</button>
      <button className={`btn btn-sidebar ${selectedOption === 'teacher' ? 'active' : ''}`} onClick={() => handleItemClick('teacher')}>Teacher</button>
      <button className={`btn btn-sidebar ${selectedOption === 'show-students' ? 'active' : ''}`} onClick={() => handleItemClick('show-students')}>Show All Student Data</button>
      <button className={`btn btn-sidebar ${selectedOption === 'message' ? 'active' : ''}`} onClick={() => handleItemClick('message')}>Message</button>
      <button className={`btn btn-sidebar ${selectedOption === 'reviews' ? 'active' : ''}`} onClick={() => handleItemClick('reviews')}>Reviews</button>
      <button className={`btn btn-sidebar ${selectedOption === 'manage-account' ? 'active' : ''}`} onClick={() => handleItemClick('manage-account')}>Manage Account</button>
      <button className="btn btn-sidebar">Logout</button>
    </div>
    {/* Add more sidebar items here */}
  </div>
</div>

        {/* Right Content */}
        <div className="col">
          <button className="btn btn-primary toggle-button d-md-none" onClick={toggleSidebar}>
            Toggle Sidebar
          </button>
          <div className="Dashboardcontent">
            {selectedOption === 'dashboard' && (
              <div>
                {/* Content for Dashboard */}
                <h1>Dashboard</h1>
              </div>
            )}
            {selectedOption === 'create-listing' && <CreateListingComponent />}
            {selectedOption === 'message' && <MessagingComponent />}
            {/* Add more components here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
