 
import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import userLogo from "../../IMAGE/WhatsApp Image 2022-06-25 at 12.52.20 PM 2.jpeg";
// import Error_emoji from "../STUDENT_DETAIL/404.png";
// import StudentDetail2 from "../STUDENT_DETAIL/StudentComponent";
import { StudentDetail1 } from "../STUDENT_DETAIL/StudentComponent";

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
    .main{  
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
       margin-top: 50px;
       width:100vw;
    }
    }
    .wrapper {     
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
        @media (max-width: ${({ theme }) => theme.media.mobile}) {
          padding: 3px 10px;
       }
      }

    }  

  .studentdetail { 
  min-width: auto;
  width: min-content;
  float: right;
  justify-content: right;
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column; 
    justify-content: center;
    gap: 4px;
  }

  .btn {
    min-width: max-content;
    padding: 3px 18px 3px 18px;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    font-weight: 500;
    background-color: rgb(51, 63, 80);
    color: whitesmoke;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      min-width: max-content; 
      padding: 3px 11px;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    }
  }
}

.b { 
  span {
    background-color: ${({ theme }) => theme.colors.backgroundBlue};
     color: rgb(247, 247, 247);
    display: block;
    padding: 3px 0 3px 8px;
    min-width: min-content;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: fit-content;
      padding-right: 10px;
      padding: 3px 10px;
    }
  }
}

    /* .studentdetail .btn:active {
      background-color: rgb(214, 212, 212);
      box-shadow: 0 1px #666;
      transform: translateY(1px);
    }  */
  `;

  return (
    <Main>  
          <div className="container-fluid main ">
            <div className=" justify-content-between w-100 pt-5 pl-0 m-0 ps-0 ">
              <div className="wrapper ">
                <div className="box a">
                  <img className="img-fluid" src={userLogo} alt=""></img>
                </div>
                <div className="box b align-self-end">
                  <span>Akash Ku. Aaryan</span>
                </div>
                <div className="box c">
                  <span onClick={logoutBtn} type="submit">
                    Logout
                  </span>
                </div>
              </div>

              <div> 
             {active === "first" && <StudentDetail1 />} 
              </div> 
            </div> 
          </div> 
    </Main>
  );
};

export default StudentDetails;
