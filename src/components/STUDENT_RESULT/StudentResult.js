import React from "react"; 
import styled from "styled-components"; 
 
const StudentResult = () => {
  return (
    <Main>
      <div classNameName=" container-fluid " >
        <div className="box  d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
           
          <div className="loader row ">
            <div className="d-block  ">
            <div className="cogs ms-5">
              <div className="cog cog0">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="cog cog1">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="cog cog2">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            </div>
            <div className="d-block dot1"> 
                 <h1 className="dot">Development is in progress </h1>
            </div> 
          </div>  
        </div> 
      </div>
    </Main>
  );
};
const Main = styled.div`  
.loader {   
  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  -o-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75); 
  } 

 .loader .dot1{
        padding-top: 110px;  
     
      .dot{
        z-index: 3;
        position: relative; 
        text-align: center;
        color: ${({ theme }) => theme.colors.headerTextColor}; 
        font-size:3rem ;
        font-weight:bold; 
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 1px; 
      } 
    }
.loader .cogs {
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
}
.loader .cogs .cog {
  -webkit-animation: rotate1 2s infinite;
  -moz-animation: rotate1 2s infinite;
  -o-animation: rotate1 2s infinite;
  -ms-animation: rotate1 2s infinite;
  animation: rotate1 2s infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  -ms-animation-timing-function: linear;
  animation-timing-function: linear; 
  background:${({ theme }) => theme.colors.backgroundBlue};
  -webkit-border-radius: 50%;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 20px;
  left: 125px;
}
.loader .cogs .cog.cog0 {
  -webkit-animation: rotate2 2s infinite;
  -moz-animation: rotate2 2s infinite;
  -o-animation: rotate2 2s infinite;
  -ms-animation: rotate2 2s infinite;
  animation: rotate2 2s infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  -ms-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-transform: rotate(22.5deg);
  -moz-transform: rotate(22.5deg);
  -o-transform: rotate(22.5deg);
  -ms-transform: rotate(22.5deg);
  transform: rotate(22.5deg);
  top: -41px;
  left: 196px;
}
.loader .cogs .cog.cog1 {
  -webkit-animation: rotate2 2s infinite;
  -moz-animation: rotate2 2s infinite;
  -o-animation: rotate2 2s infinite;
  -ms-animation: rotate2 2s infinite;
  animation: rotate2 2s infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  -ms-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-transform: rotate(22.5deg);
  -moz-transform: rotate(22.5deg);
  -o-transform: rotate(22.5deg);
  -ms-transform: rotate(22.5deg);
  transform: rotate(22.5deg);
  top: -41px;
  left: 54px; 
}
.loader .cogs .cog:after {
  content: '';
  position: absolute;
  top: 22px;
  left: 22px;
  right: 22px;
  bottom: 22px; 
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: 2;
  background-color: white;
}
.loader .cogs .cog .bar {
  position: absolute;
  top: -15%;
  bottom: -15%;
  left: 39%;
  right: 39%;  
  background:${({ theme }) => theme.colors.backgroundBlue};
}
.loader .cogs .cog .bar:nth-of-type(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.loader .cogs .cog .bar:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.loader .cogs .cog .bar:nth-of-type(4) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
@-moz-keyframes loader {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  30% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  40% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  70% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@-webkit-keyframes loader {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  30% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  40% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  70% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@-o-keyframes loader {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  30% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  40% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  70% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@keyframes loader {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  30% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  40% {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  70% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    -ms-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@-moz-keyframes rotate1 {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-webkit-keyframes rotate1 {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-o-keyframes rotate1 {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes rotate1 {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@-moz-keyframes rotate2 {
  0% {
    -webkit-transform: rotate(202.5deg);
    -moz-transform: rotate(202.5deg);
    -o-transform: rotate(202.5deg);
    -ms-transform: rotate(202.5deg);
    transform: rotate(202.5deg);
  }
  100% {
    -webkit-transform: rotate(22.5deg);
    -moz-transform: rotate(22.5deg);
    -o-transform: rotate(22.5deg);
    -ms-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }
}
@-webkit-keyframes rotate2 {
  0% {
    -webkit-transform: rotate(202.5deg);
    -moz-transform: rotate(202.5deg);
    -o-transform: rotate(202.5deg);
    -ms-transform: rotate(202.5deg);
    transform: rotate(202.5deg);
  }
  100% {
    -webkit-transform: rotate(22.5deg);
    -moz-transform: rotate(22.5deg);
    -o-transform: rotate(22.5deg);
    -ms-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }
}
@-o-keyframes rotate2 {
  0% {
    -webkit-transform: rotate(202.5deg);
    -moz-transform: rotate(202.5deg);
    -o-transform: rotate(202.5deg);
    -ms-transform: rotate(202.5deg);
    transform: rotate(202.5deg);
  }
  100% {
    -webkit-transform: rotate(22.5deg);
    -moz-transform: rotate(22.5deg);
    -o-transform: rotate(22.5deg);
    -ms-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }
}
@keyframes rotate2 {
  0% {
    -webkit-transform: rotate(202.5deg);
    -moz-transform: rotate(202.5deg);
    -o-transform: rotate(202.5deg);
    -ms-transform: rotate(202.5deg);
    transform: rotate(202.5deg);
  }
  100% {
    -webkit-transform: rotate(22.5deg);
    -moz-transform: rotate(22.5deg);
    -o-transform: rotate(22.5deg);
    -ms-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }
}

`;

export default StudentResult;
