import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
*{
  list-style: none;
  text-decoration: none; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 0.5px;
 }

 html {
  font-size: 62.5%;
  scroll-behavior: smooth;  
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  overflow-x: hidden;
  text-decoration: none;
 }

 body {
    overflow-x: hidden; 
    scrollbar-width: thin;
  }
  *::-webkit-scrollbar {
        width: 15px;   
    } 
    *::-webkit-scrollbar-thumb { 
        border-radius: 20px;  
         background:#e9ecef; 
    }
a {
  text-decoration: none;
};
.PDli ul  li{
  font-size: 1.5rem;
  padding:5px;
}
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 60%;
      }
      .grid{
        gap: 3.2rem;
      } 
      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}


/* DASHBOARD */

.sidebar-offcanvas {
  width: 250px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.sidebar-offcanvas.show {
  transform: translateX(0);
}

.closebtn { 
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.closebtn.show {
  transform: translateX(30%);
}

.Dashboardcontent {
  flex: 1; 
  /* border: 1px solid gray; */
  position: relative; 
  height:max-content;
  width: auto;
}

.toggle-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.sidebar-navbar { 
  background-color: #1d293e;
  width: max-content;
  height: auto;
  left: 0;
  margin: 0; 
  top:80px; 
  bottom:0;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  z-index: 9;
  @media (max-width:${({ theme }) => theme.media.mobile}) {
    top:70px; 
 
}
}

.btn-sidebar {
  list-style: none !important; 
  border: none !important;
}

.btn-sidebar {  
  background-color: #1d293e;
   width: 220px;
  outline: none;
  text-decoration: none;
  display: block;
  text-align: left;
  color: #60708c;
  padding: 15px 30px;
  font-size: 1.5rem; 
}

.btn-sidebar:hover { 
  color: #fff !important;
  background-color: #172133 !important;
  border-left-color: #ff5a5f !important;
  transition: transform 0.4s ease-in-out;
  transform: translateX(+5px
  );
  
}

.btn-sidebar:active {  
  color: #fff !important;
  background-color: #172133 !important;
  border-left-color: 2px solid #ff5a5f !important;
}
 
`;
