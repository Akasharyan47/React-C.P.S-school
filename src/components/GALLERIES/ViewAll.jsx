import { useState, useEffect } from 'react';
import styled from 'styled-components';  
const ViewAll = () => {

  const [data, setData] = useState([]); 
  const getData = () => {
    fetch('GallerieIMGdata.json', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then((response) => {
      return response.json()
    }).then((myjson) => {
      setData(myjson); 
    })
    }
     useEffect(() => {
     getData(); 
     }, []) 
  return (
    <Main> 
    <div className='container bg-info   vx'> 
      <div className='photo-gallery d-flex row vy '>
        {
          data && data.length > 0 && data.map((idd, index) => {
           return ( 
            <div className=' mp mt-1'>  
             <div className='photo '>  
                  <img className="img-fluid" alt="image" src={idd.image}    ></img> 
             </div> 
          </div>
          )
        })}  
      </div> 
    </div>
    </Main>
  );
}

const Main = styled.div`
  
.vy{ 
 left:0;
 right:0;  
 position: absolute; 
} 
 
 .mp{
   object-position: center;
   width:200px;
    height:min-content;
   display: flex;
   margin: auto;
   flex-direction: column;
   background-color:${({ theme }) => theme.colors.backgroundYellow}; 
  .photo{
   margin-top: 5px 2px;
   background-color:${({ theme }) => theme.colors.backgroundBlue}; 
  }
 }
 @media (max-width: ${({ theme }) => theme.media.mobile}) {
   .mp{
   width:100px; 
   margin: auto;
   flex-direction: column;
   background-color:${({ theme }) => theme.colors.backgroundYellow}; 

 }
} 
`;
export default ViewAll;