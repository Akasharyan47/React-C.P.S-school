import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [username, setUsername] = useState();
  const [showLogoutOption, setShowLogoutOption] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUserData = localStorage.getItem("CPS_user");
    if (storedUserData) {
      setUsername(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('CPS_user');
    setUsername(null);
    setShowDropdown(false);
  };
  const handleNavLinkClick = () => {
    // Toggle the visibility of the dropdown
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 2.2rem;
      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            margin-top: 4px;
            letter-spacing: 1.5px;
            color: #262626d0;
            font-weight: 600;
            display: inline-block;
            text-decoration: none;
            font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.headerTextColor};
            font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
              sans-serif;
            transition: color 0.3s linear;
          }
          &:after {
            content: "";
            width: 0%;
            height: 1px;
            background: #ffc000;
            display: block;
            margin: auto;
            transition: 0.6s all;
          }
          &:hover {
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 80%,
              #ff9933
            );
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.headerTextColor};
        .mobile-nav-icon {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.headerTextColor};
        }
      }
      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:after {
              content: "";
              width: 0%;
              height: 2px;
              background: #ffc000;
              display: block;
              margin: auto;
              transition: 0.1s;
            }
            &:hover::after {
              width: 100%;
            }
            &:link,
            &:visited {
              font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
            }
          }
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 3rem;
        position: fixed;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
        overflow: hidden;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list ">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/About"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Admission"
            >
              ADMISSION
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Academics"
            >
              ACADEMICS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Teacher"
            >
              TEACHER
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/StudentResult"
            >
              Student
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/StudentDetails"
            >
              DASGBOARD
            </NavLink>
          </li>

          {/* <li className="rounded" style={{ backgroundColor: "#333f50", padding: "0 20px" }}>
          <NavLink
            className="navbar-link color-white text-light"
            onClick={() => setOpenMenu(false)}
            to="/Login"
           >

            {username ? `${username}` : 'Login'}
          </NavLink>
        </li> */}

          {username && username.login ? ( 
            <li 
            >
              <NavLink onClick={handleNavLinkClick} className="navbar-link text-light rounded " style={{ backgroundColor: "#333f50", padding: "3px 15px" }}>
              {username.username}
           
              {showDropdown && (
                <div className="dropdown ">
                  <button
                    className="bg-success rounded "
                    onClick={handleLogout}
                    style={{ maxWidth:"100px",  padding: "4px 15px", border:"none", position:"absolute", top:"20px", left:"-15px", fontSize:"1.3rem", fontWeight:"bold"}}
                   >
                    Logout
                  </button>
                   
                </div>
              )}
              </NavLink>
            </li> 
            
          ) : (
            /* If user is not logged in, show a Login link */
            <li
              className="rounded"
               
            >
              <NavLink
                className=" rounded navbar-link color-white text-light"
                to="/Login"
                style={{ backgroundColor: "#333f50", padding: "3px 15px" }}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
