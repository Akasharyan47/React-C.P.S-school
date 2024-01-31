import styled from "styled-components";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ViewAll from "./ViewAll";


const images = [
  "https://images.unsplash.com/photo-1635975206435-934b1ca3b421?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1636312058374-ac0ffdb40d37?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1636298961986-4fa5d2aba98c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635982990748-6ba76f8ab4b6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635685296916-95acaf58471f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635646597195-2e119d01610d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

];

const AcademicCard = () => { 

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <>
      <Main>
        <div className="Main-GAlleries">
          <div id="main-slider-container">
            <MdChevronLeft size={50} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
              {images && images.length > 0 && images.map((slide, index) => {
                return (
                  <div className="slider-card">
                    <div className="slider-card-image" style={{ 'backgroundImage': `url(${images})`, backgroundSize: 'cover' }} >
                    </div>
                  </div>
                )
              })
              }
            </div>
            <MdChevronRight size={50} className="slider-icon right" onClick={slideRight} />
          </div>

        </div>
        <div>
          <div id="main-slider-container" className="justify-content-end d-flex ">

            <button className="btn bg-success  viewAll btn-lg"
              type="submit" onClick={handleClick}> View All
            </button> 
          </div>
          {isShown && (
            <div>
              <ViewAll />
            </div>
          )} 
        </div> 
      </Main>
    </>
  )
};
const Main = styled.section`
box-sizing: border-box;
margin: 0;
padding: 0;

.Main-GAlleries{
  width: 100%;  
justify-content:center;
align-items:center;
display:flex; 
-webkit-align-items: stretch;
-ms-flex-align: stretch;
align-items: stretch;  
} 
#main-slider-container{
width: 94%;  
justify-content:center;
align-items:center;
display:flex; 
-webkit-align-items: stretch;
-ms-flex-align: stretch;
align-items: stretch;
} 
#slider{
width: 90%;

height:auto;   
white-space: nowrap;
overflow-x: scroll;
scrollbar-width: none;
scroll-behavior: smooth; 
} 
#slider::-webkit-scrollbar{
display: none;
}

#main-slider-container {
position: relative;
display: flex;
align-items: center;
}  
.slider-card-image{
width: 100%;
height:100%; 
display:flex;

img{
  background-size:cover; 
  width:100%;
  height:100%;
  display:flex;
}
}

.slider-icon.left, .slider-icon.right { 
position: absolute; 
background:none;
border-radius: 0px;
opacity: 0.5;   
cursor: pointer;
box-shadow:0px   #000;
-webkit-box-shadow:0px #000;
-moz-box-shadow:  0px  #000;
}

.slider-icon.left{
left: 0; 
}

.slider-icon.right{
right: 0;
}

.slider-icon.left:hover, .slider-icon.right:hover{
opacity: 1;
}  
.slider-card{
width: 250px;
height: 160px;
background: white;
border-radius: 0px;
border: 1px solid rgb(206, 206, 206)  ;
display: inline-block;
margin-left: 5px;
margin-right: 5px;  
cursor: pointer;
} 
@media (max-width: ${({ theme }) => theme.media.mobile}) {
.slider-card{
width: 170px;
height: 120px;
} 
}  
.viewAll{
margin-right:1.7%;
margin-top:5px;
padding: 6px 20px;
font-weight: bold;
color: white;
}
`;


export default AcademicCard;