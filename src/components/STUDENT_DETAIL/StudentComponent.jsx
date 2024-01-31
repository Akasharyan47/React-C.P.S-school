import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
 

export const StudentDetail1 = () => {

  const Main = styled.section`
    /* ====   START   HEADMASTER DETAIL  === */
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    letter-spacing: 0.6px;
 
    *::-webkit-scrollbar {
      width: 10px;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: #e9ecef;
    }
    .headmaster {
      width: 100%;
      height: auto;
    }
    .headmasterbox { 
      padding-top: 20px;
      width: 100%;
      display: block;
      height: 80px;
      align-items: center;
      li {
        margin-right: 25px;
        background-color: #333f50;
        display: inline-flex;
        padding: 4px 15px;
        border-radius: 2px;
        cursor: pointer;
        a {
          font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
          color: white;
        }
      }
    }
    .headmasterdetail { 
      display: flex;
      width: 100%;
      height: 40vh;
      justify-content: center;
      align-items: center;
      ul { 
        width: max-content;
        height: fit-content;
        
        gap: 80px; 
        li {
          color: #3f3e3e;
          font-weight: bold;
          letter-spacing: 1px; 
           font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
        }
      }
    }
  `;
  return (
    <Main>
      <section>
        <div id="show1" className="headmaster pt-3">
          <div className="headmasterbox">
            <ul>
              <h2><br></br></h2>

              <li>
                <a className="pfdetail "> Profile Detail</a>
              </li>
              <li>
                <a className="pfedit">Edit Detail</a>
              </li>
            </ul>
          </div>
          <div className="headmasterdetail">
            <ul>
              <li>
                <a className="hdname">Name </a>
              </li>
              <li>
                <a className="dsgn">Designation </a>
              </li>
              <li>
                <a className="dob">Date of Birth</a>
              </li>
              <li>
                <a className="eml">Email</a>
              </li>
              <li>
                <a className="cnumber">Contact Number</a>
              </li> 
            </ul>
            <ul>
            <li>: Akash Kumar Aaryan </li>
              <li>: Developer </li>
              <li>: 09-06-2001 </li>
              <li>: akasharyan.aryan@gmail.com </li>
              <li>: +917254973847 </li>
            </ul>
          </div>
        </div>
      </section>
    </Main>
  );
};

const StudentDetail2 = () => {
  const Main = styled.section`
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);
  
    /*====START==========MAIN =========== */
    .stlist {
      display: -ms-flexbox;
      -ms-flex: auto;
      flex: auto;
      width: 100%;
      height: 500px;
      justify-content: center;
      align-items: center;
    }
    .stlist1 {
      background-color: #ffffff;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding-top: 6px;
      padding-bottom: 15px;
    } 
    .stlist01 {  
       align-items: start;
       height: auto;
       align-items: center;
    }

    /*  DROP DOWN BUTTON    START  */

    .inner {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      width: 35px;
      border: none;
      background-color: ${({ theme }) => theme.colors.backgroundYellow};
    }
    .inner BUTTON {
      min-width: 50px;
      height: 25px;
      border: none;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
      transition: all 1s;
      background-color: ${({ theme }) => theme.colors.backgroundBlue};
      :after {
        margin-left: 5px;
        font-size: 15px;
        transform: rotate(-0.25turn);
      }
      :hover {
        transform: translateX(15%);
      }
    }
    .dropmenu {
      border: 1px solid white;
      display: block;
      position: relative;
      height: 250px;
      overflow: auto;
    }
    .cln {
      scrollbar-width: thin;
      transition: all 1s;
      width: 120px;
      margin: 7px;
      background: rgba(203, 202, 202, 0.789);
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    }
    /*  drop down  end == */
    .stlist .search {
      width: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .search a {
      color: #4e4c4c;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    }
    .search .searchterm {
      font-style: italic;
      position: relative;
      justify-content: center;
      align-items: center;
      padding: 5px;
      margin-left: 10px;
      width: 27%;
      line-height: normal;
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.colors.backgroundYellow};
    }
    .stlist .totaldtudent {
      width: 25%;
      height: 100%;
      justify-content: right;
      align-items: center;
      display: inline-flex;
    }
    .totaldtudent a {
      margin: 4px;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
      color: #7f7f7f;
    }
    .totaldtudent .tstudent {
      color: #404040;
      padding: 4px 20px;
      font-size: 16px;
      font-weight: bold;
      border: 2px solid #949494;
      display: inline-flex;
    }

    /*   show data  start === */

    .container-fluid {
      background-color: ${({ theme }) => theme.colors.backgrountColorGray};
    }
    .containerbox {
      display: block;
      width: 90%;    
       align-items: center;
      justify-content: center;
      color: #3f3e3e;
      background: white;
      font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};

      table th{
        background-color: ${({ theme }) => theme.colors.backgroundBlue};  
        color: rgb(247, 247, 247); 
        border-right: 1px solid white;
        padding:"0px";
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }   
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
         .containerbox{
          font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
          width:100%;  

         }
      } 
  `;
  const [selectedClass, setSelectedClass] = useState("STD ");
  const handleSelect = (sd) => {
    setSelectedClass(sd);
  };
  const [classData, setClassData] = useState([]);   
  const [searchTerm, setSearchTerm] = useState('');
 

  useEffect(() => {
    // Load data from the JSON file when the component mounts
    fetch('studentlist.json') // Replace with the correct path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data && data.data[selectedClass]) {
          setClassData(data.data[selectedClass]);
        } else {
          console.error('Class data not found');
        }
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, [selectedClass]);
  console.log(classData)

  return (
    <Main>
      <section>
        <div className="container-flui m-0 p-0 ">
          <div className="stlist pt-3">
            <div className="stlist1 d-flex  justify-content-between">
              <div className="stlist01">
                <DropdownButton
                  className="outer inner  btn btn-primary"
                  title={selectedClass}
                  id="dropdown-menu-align-right"
                  onSelect={handleSelect}
                 >
                  <div className="dropmenu ">
                    <Dropdown.Item className="cln" eventKey="STD 1">
                      STD 1
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 2">
                      STD 2
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 3">
                      STD 3
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 4">
                      STD 4
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 5">
                      STD 5
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 6">
                      STD 6
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 7">
                      STD 7
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 8">
                      STD 8
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 9">
                      STD 9
                    </Dropdown.Item>
                    <Dropdown.Item className="cln" eventKey="STD 10">
                      STD 10
                    </Dropdown.Item>
                  </div>
                </DropdownButton>
              </div>
              <div className="search">
                <a > Search Students </a>
                 <input className="searchterm"
                 placeholder="Enter  name "
                 ></input>
              </div>
              <div className="totaldtudent">
                <a> Total Students</a>
                <a  id="tnum" className="tstudent pt-0 pb-0">
                  {classData.length}
                </a>
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-center m-0 ">
              <div className="containerbox m-0 "> 
                <table className="table">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Student Id</th>
                      <th>Roll Number</th>
                      <th>Class</th>
                      <th>Status</th>
                      <th>Edit Details</th>
                    </tr>
                  </thead> 
                  <tbody>
                    {classData.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.id}</td>
                        <td>{student.roll_number}</td>
                        <td>{student.class}</td>
                        <td>{student.status}</td>
                        <td>
                          <button> Edit Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
 
          </div>
        </div>
      </section>
    </Main>
  );
};

export default StudentDetail2;
