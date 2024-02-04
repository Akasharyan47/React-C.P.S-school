import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import studentListData from "../../Data/studentList.json";
import ProfileDetailModal from "./ProfileDetailModal";

const Main = styled.section`
  /* ====   START   HEADMASTER DETAIL  === */
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,100,200,300");
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
    display: flex;
    height: 80px;
    align-items: center;

    li {
      margin-right: 25px;
      background-color: #333f50;
      display: inline-flex;
      padding: 4px 15px;
      border-radius: 2px;
      cursor: pointer;
      color: #fff;

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        margin-right: 10px;
        display: inline-flex;
        padding: 4px 10px;
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

export const StudentDetail1 = () => {
  const initialDetails = {
    name: "Akash Kumar Aaryan",
    designation: "Developer",
    dob: "09-06-2001",
    email: "akasharyan.aryan@gmail.com",
    contactNumber: "+917254973847",
    location: "Navi Mumbai (Maharashtra)",
    profile: `
      Pursuing B.Tech from Bharati Vidyapeeth (DU) College of Engineering in Computer Science and Engineering.
      My passion lies in the world of web development, where I specialize in creating immersive and user-friendly experiences using React.js.
      With a strong foundation in both web development principles and React.js.
    `,
    technicalSkills: [
      "HTML5, UI/UX, RESPONSIVE",
      "CSS3, BOOTSTRAP, MUI, TAILWIND",
      "REACT JS, REDUX, REACT NATIVE , NEXT JS",
      "JAVASCRIPT, TYPESCRIPT",
      "GITHUB, FIGMA, MS OFFICE, REST APIs",
    ],
    educationDetails: [
      {
        degree: "B Tech (Computer Science and Engineering)", 
        institution: "Bharati Vidyapeeth Deemed University (2020-24), Navi Mumbai", 
      },
      {
        degree: "Senior Secondary (Science and Mathematics)", 
        institution: "Patel College (2018-20), BSEB Patna", 
        
      },
      {
        degree: "Matriculation", 
        institution: "U M S school (2016),  BSEB Patna", 
      },
    ],
    address: { 
      area: "Navi Mumbai, Maharashtra", 
    },
    hobbies: ["Photography, Tracking, Fitness"],
  };
  

  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ ...initialDetails });
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save logic with editedDetails
    // For demonstration purposes, let's update the displayed details in state
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  const handleProfileDetailClick = () => {
    console.log("Profile Detail Clicked");
    setShowProfileModal(true);
  };

  const handleCloseModal = () => {
    setShowProfileModal(false);
  };

  return (
    <Main>
      <section>
        <div
          id="show1"
          className={`headmaster pt-3 ${isEditing ? "editing" : ""}`}
        >
          <div className="headmasterbox">
            <ul>
              <li>
                <span
                  className="text-light"
                  onClick={() => handleProfileDetailClick()}
                >
                  Profile Detail
                </span>
              </li>
              {isEditing ? (
                <li>
                  <span className="pfedit text-light" onClick={handleSaveClick}>
                    Save
                  </span>
                </li>
              ) : (
                <li>
                  <span className="pfedit text-light" onClick={handleEditClick}>
                    Edit Detail
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="headmasterdetail bg-light">
            {isEditing ? (
              /* Editable section */
              <ul className=" w-50 list-unstyled">
                <li className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={editedDetails.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </li>
                <li className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Designation"
                    value={editedDetails.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                  />
                </li>
                <li className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={editedDetails.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                  />
                </li>
                <li className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={editedDetails.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </li>
                <li className="mb-2">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Contact Number"
                    value={editedDetails.contactNumber}
                    onChange={(e) =>
                      handleInputChange("contactNumber", e.target.value)
                    }
                  />
                </li>
              </ul>
            ) : (
              /* Display section */
              <ul className="">
                <li>
                  <span className="hdname">Name </span>: {editedDetails.name}
                </li>
                <li>
                  <span className="dsgn">Designation </span>:{" "}
                  {editedDetails.designation}
                </li>
                <li>
                  <span className="dob">Date of Birth</span>:{" "}
                  {editedDetails.dob}
                </li>
                <li>
                  <span className="eml">Email</span>: {editedDetails.email}
                </li>
                <li>
                  <span className="cnumber">Contact Number</span>:{" "}
                  {editedDetails.contactNumber}
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {showProfileModal  && (
        <ProfileDetailModal
          details={{
            name: editedDetails.name,
            designation: editedDetails.designation,
            dob: editedDetails.dob,
            email: editedDetails.email,
            contactNumber: editedDetails.contactNumber,
            educationDetails: editedDetails.educationDetails,
            technicalSkills:editedDetails.technicalSkills,
            location:editedDetails.location,
            profile:editedDetails.profile,
            address:editedDetails.address,
            hobbies:editedDetails.hobbies,


          }}
          onClose={handleCloseModal}
        />
      )}
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
    .search span {
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
    .totaldtudent span {
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

      table th {
        background-color: ${({ theme }) => theme.colors.backgroundBlue};
        color: rgb(247, 247, 247);
        border-right: 1px solid white;
        padding: "0px";
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .containerbox {
        font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
        width: 100%;
      }
    }
  `;

  const [selectedClass, setSelectedClass] = useState("STD ");
  const handleSelect = (sd) => {
    setSelectedClass(sd);
  };
  const [classData, setClassData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (
      studentListData &&
      studentListData.data &&
      studentListData.data[selectedClass]
    ) {
      setClassData(studentListData.data[selectedClass]);
    } else {
      console.error("Class data not found");
    }
  }, [selectedClass]);

  const filteredClassData = classData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toString().includes(searchQuery)
  );

  console.log(classData);

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
                <span> Search Students </span>
                <input
                  className="searchterm"
                  placeholder="Enter  name "
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
              </div>
              <div className="totaldtudent">
                <span> Total Students</span>
                <span id="tnum" className="tstudent pt-0 pb-0">
                  {filteredClassData.length}
                </span>
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
                    {filteredClassData.map((student) => (
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
