 
import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import userLogo from "../../IMAGE/WhatsApp Image 2022-06-25 at 12.52.20 PM 2.jpeg";
import Error_emoji from "./404.png";
import StudentDetail2 from "./StudentComponent";
import { StudentDetail1 } from "./StudentComponent";

const StudentDetails = () => {
  const [active, setActive] = useState("first");
  const [parsed, setParsedItem] = useState("");
  const navigator = useNavigate();

  const getLoginInfo = () => {
    const user_info = localStorage.getItem("CPS_user");
    const parsedItem = JSON.parse(user_info);
    setParsedItem(parsedItem);
  };

  useEffect(() => {
    getLoginInfo();
  }, []);

  const logoutBtn = () => {
    localStorage.removeItem("CPS_user");
    window.opener = null;
    navigator("/");
    window.close();
  };

  const Main = styled.section` 
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
    #notfound {
      position: relative;
      height: 100vh;
    }
    #notfound .notfound {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .notfound {
      max-width: 560px;
      width: 100%;
      padding-left: 160px;
      line-height: 1.1;
    }

    .notfound .notfound-404 {
      position: absolute;
      left: 0;
      top: 0;
      display: inline-block;
      width: 140px;
      height: 140px;  
      background-size: cover;
    }

    .notfound .notfound-404:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-transform: scale(2.4);
      -ms-transform: scale(2.4);
      transform: scale(2.4);
      border-radius: 50%;
      background-color: #f2f5f8;
      z-index: -1;
    }
    /* Your existing CSS styles */
    .klbtn {
      /* Your other styles go here */

      /* Add the following styles for the blinking effect */
      position: relative;
      overflow: hidden;
    }

    .klbtn span::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #000; /* Change the color as needed */
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: transform 0.3s ease;
    }

    .klbtn:hover span::after {
      transform: scaleX(1);
    }

    .notfound h1 {
      font-family: "Nunito", sans-serif;
      font-size: 65px;
      font-weight: 700;
      margin-top: 0px;
      margin-bottom: 10px;
      color: #151723;
      text-transform: uppercase;
    }

    .notfound h2 {
      font-family: "Nunito", sans-serif;
      font-size: 21px;
      font-weight: 400;
      margin: 0;
      text-transform: uppercase;
      color: #151723;
    }
    .notfound p {
      font-family: "Nunito", sans-serif;
      color: #999fa5;
      font-weight: 400;
    }
    .notfound a {
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      font-family: "Work Sans", sans-serif;
      display: inline-block;
      font-weight: bold;
      text-decoration: none;
      color: #388dbc;
    }

    @media only screen and (max-width: 567px) {
      .notfound .notfound-404 {
        width: 80px;
        height: 80px;
      }
      .notfound { 
        padding-left:100px; 
        padding-top: 0px;
        width:80%;
        font-size: 10px;
      }
      .notfound h2 {
        font-size: 1.7rem;
        font-weight: bold;
      }
      .notfound .notfound-404 {
      position: relative;
       } 
      }

    ${"" /*  ---------- */}

    .main1 {
      margin: 0;
      top: 0;
      height: auto; 
      width: 100vw;
    }
    .container-fluid {
      display: flex;
      padding: 18px;
    }
    .wrapper {
      overflow: hidden;
      width: min-content;
      display: grid;
      grid-column-gap: 9px;
      grid-row-gap: 6px;
      grid-template-columns: 65px 100px 100px;
      grid-template-rows: 30px 27px;
    }
    .box {
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      font-weight: bold;
      letter-spacing: 0.7px;
    }
    .a {
      grid-column: 1;
      grid-row: 1 / 3;
      img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
      }
    }
    .b {
      grid-column: 2 /4;
      grid-row: 1;
      span {
        background-color: ${({ theme }) => theme.colors.backgroundBlue};
        color: rgb(247, 247, 247);
        display: block;
        padding: 3px 0 3px 8px;
        min-width: min-content;
      }
    }
    .c {
      grid-column: 2 /4;
      grid-row: 2;
      span {
        padding: 3px 25px 3px 8px;
        background-color: #c55a11;
        color: rgb(238, 238, 238);
        cursor: pointer;
        overflow: hidden;
      }
    }
    /*  START   LOGIN INFORMATION */

    /*  END  LOGIN INFORMATION   ============ */

    /*    START   STUDENT DETAIL   ================ */

    .studentdetail {
      min-width: auto;
      width: min-content;
      float: right;
      justify-content: right;
      align-items: center;
      flex-direction: row;
      display: flex;
      gap: 10px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .studentdetail {
        flex-direction: column;
      }
      .studentdetail .btn {
        padding: 2px 5px 2px 5px;
        font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      }
      .b {
        span {
          width: 100px;
        }
      }
    }

    .studentdetail btn {
      min-width: max-content;
      padding: 2px 18px 3px 18px;

      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      font-weight: 500;
      background-color: rgb(238, 238, 238);
      color: #495057;
      cursor: pointer;
    }
    .studentdetail btn:hover {
      background-color: rgb(214, 212, 212);
    }
    .studentdetail btn:active {
      background-color: rgb(214, 212, 212);
      box-shadow: 0 1px #666;
      transform: translateY(1px);
    } 
  `;

  return (
    <Main>
      {!parsed ? (
        <div className="main1 position-absolute">
          <div id="notfound">
            <div className="notfound">
              <div
                className="notfound-404"
                style={{ backgroundImage: `url(${Error_emoji})` }}
              ></div>
              <h1>404</h1>
              <div>
                <h2>Please login first to proceed further.</h2>
              </div>
              <br />
              <br />
              <NavLink to="/Login" type="button" className="klbtn">
                <span className="">Back to Login Page :)</span>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="main1 m-0 ">
            <div className="p-4 d-flex justify-content-between bg-dark">
              <div className="wrapper">
                <div className="box a">
                  <img className="img-fluid" src={userLogo} alt=""></img>
                </div>
                <div className="box b align-self-end">
                  <span>{parsed.Name}</span>
                </div>
                <div className="box c">
                  <span onClick={logoutBtn} type="submit">
                    Logout
                  </span>
                </div>
              </div>

              <div className="studentdetail ">
                <Button
                  className="btn"
                  onClick={() => setActive("first")}
                  variant="light"
                >
                  Student Registration
                </Button>
                <Button
                  className="btn"
                  onClick={() => setActive("second")}
                  variant="light"
                >
                  View Student Details
                </Button>
              </div>
            </div>
            <>
              {active === "first" && <StudentDetail1 />}
              {active === "second" && <StudentDetail2 />}
            </>
          </div>
        </>
      )}
    </Main>
  );
};

export default StudentDetails;
