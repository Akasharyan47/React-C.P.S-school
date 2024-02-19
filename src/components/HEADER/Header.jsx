import React from "react";
import Navbar from "../HEADER/Navbar.jsx";
import styled from "styled-components";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const MainHeader = styled.div` 
  padding:0px 10px;
  box-shadow:1px 1px 4px   rgba(0, 0, 0, 0.664); 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  .HeaderLogo{      
    min-width:auto;
   overflow: hidden; 
   display: flex;  
    
   align-items: center;  
   }  
   .logo {
    width: 80px;
    height: 80px;
  } 
  .lgnme { 
    min-width:200px;
  display: block; 
   color: #595959;  
  font-size:17px; 
  font-weight:bolder;  
  text-decoration:none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} 
.logo-Name{  
  padding-left:1rem; 
  overflow:hidden;  
 }
 @media (max-width: ${({ theme }) => theme.media.mobile}) {
  .logo { 
    width: 70px;
    height: 70px;
  } 
  .lgnme {   
    font-size: 17px;
  } 
  .HeaderLogo{    
    min-width:auto;
  }
}
`;
  return (
    <MainHeader>
      <div>
        <div className="HeaderLogo">
          <NavLink to="./"><img src={Logo} alt="logo" className="logo" /></NavLink>
          
          <div className="grid-two-coloumn logo-Name pt-2 ">
            <div className="section-Logo-Name1 text-decoration-none">
              <span className="lgnme">CENTRAL PUBLIC SCHOOL </span>
            </div>
            <div className="section-Logo-Name2 "> 
              <p style={{ fontWeight: "400", letterSpacing: "2px", color: "#7F7F7F", fontStyle: "italic", fontSize: " ${({ theme }) => theme.fontSize.headerfontSizeH}"}}> (Ghusia Kalan) </p>
            </div>
          </div> 
        </div>
      </div>

      <Navbar />
    </MainHeader>
  );
};


export default Header;

