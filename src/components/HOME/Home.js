import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
// import { useGlobalContext } from "../../context";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApplicationProcess from "./ApplicationProcess/ApplicationProcess";
import {
  FooterAbout,
  FooterContactUs,
  FooterBottom,
} from "../FOOTER/Footer.jsx";
import {
  faBasketball,
  faPersonChalkboard,
  faSchool,
  faLightbulb,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBasketball,
  faPersonChalkboard,
  faSchool,
  faLightbulb,
  faCaretUp,
  faCaretDown
);

const announcements = [
  {
    title: "Documents for empanelment of vendor for A Class contractor Registration Form for Selected Candidates  ",
    date: "New",
  },
  {
    title: "PhD  Registration Form for Selected CandidatesRegistration Form for Selected CandidatesRegistration Form for Selected CandidatesRegistration ",
    date: "New",
  },
  {
    title: "31 Mar 2022 Institutional Distinctiveness",
    date: "New",
  },
  {
    title: "Documents for empanelment of vendor for A Class contractor Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "PhD Registration Form for Selected Candidates Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "31 Mar 2022 Institutional Distinctiveness",
    date: "New",
  },
  {
    title: "Documents for empanelment of vendor for A Class contractor Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "PhD Registration Form for Selected Candidates Registration Form for Selected Candidates Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "31 Mar 2022 Institutional Distinctiveness Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "Documents for empanelment of vendor for A Class contractor Registration Form for Selected Candidates Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "PhD Registration Form for Selected Candidates Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "31 Mar 2022 Institutional Distinctiveness",
    date: "New",
  },
  {
    title: "Documents for empanelment of vendor for A Class contractor Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "PhD Registration Form for Selected Candidates Registration Form for Selected CandidatesRegistration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "31 Mar 2022 Institutional Distinctiveness Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "Documents for empanelment of vendor for A Class contractor",
    date: "New",
  },
  {
    title: "PhD Registration Form for Selected Candidates Registration Form for Selected Candidates",
    date: "New",
  },
  {
    title: "31 Mar 2022 Institutional Distinctiveness",
    date: "New",
  },
  
  // Add more announcement objects as needed
];

const bannerImages = [
  {
    url: require("../../IMAGE/cps.jpg"),
  },
  {
    url: require("../../IMAGE/cps.jpg"),
  },
  {
    url: require("../../IMAGE/cps.jpg"),
  },
  {
    url: require("../../IMAGE/cps.jpg"),
  },
  {
    url: require("../../IMAGE/cps.jpg"),
  },
  {
    url: require("../../IMAGE/cps.jpg"),
  },
];
const Home = () => {
  // const { notificationDetail, isloading,  } = useGlobalContext();

  return (
    <Main>
      {/* <section>
        {(() => {
          if (isloading) {
            return (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only color-success">Loading...</span>
                </div>
              </div>
            );
          }
        })()}
      </section> */}

      <section>
        <div
          className=" d-block"
          style={{
            height: "auto",
            backgroundColor: " #033d5a",
            border: "4px solid  #033d5a",
            borderBottom: "13px solid  #033d5a",
          }}
        >
          <Slide>
            {bannerImages.map((bannerImages, index) => {
              return (
                <div className="each-slide-effect bhn">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      alt=""
                      src={bannerImages.url}
                    ></img>
                  </div>
                </div>
              );
            })}
            ;
          </Slide> 
        </div>
      </section>

      <section>
        <div className="main2">
          <div className="wlcm1">
            <span> Welcome to </span>
          </div>
          <div className="wlcm2">
            <span> CENTRAL PUBLIC SCHOOL</span>
            <p> ( Ghusia kalan )</p>
          </div>
          <div className="wlcm4">
            <span> </span>
          </div>
          <div className="wlcm3 ">
            <span>
              The purpose of education is to make good human beings with skill
              and expertise…Enlightened human beings can be created by teachers.
              <text
                style={{
                  fontWeight: "400",
                  color: "#005F8E",
                  fontStyle: "italic",
                  fontSize: "12px",
                }}
              >
                ‘ Dr.A.P.J.Abdul Kalam ’
              </text>
            </span>
          </div>
        </div>
      </section>

      <ApplicationProcess />

      <section>
      <div className="main3">
        <div className="announcements">
          <div className="announcement11">
            <div className="announcements1">
              <h4 className="ansment1">Announcements</h4>
            </div>
            <div className="announcements2">
              <FontAwesomeIcon
                className="pt-2 pb-0 bg-pink"
                icon={faCaretUp}
                style={{ fontSize: "2.5rem", color: "white" }}
              />
              <div className="latest-news-container">
                <ul className="latest-news-ul">
                  {announcements.map((announcement, index) => (
                    <li key={index}>
                      <h4>
                        {announcement.title}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          {announcement.date}
                        </span>
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ fontSize: "2.5rem", color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      <Fragment>
        <FooterAbout />
        <FooterContactUs />
        <FooterBottom />
      </Fragment>
    </Main>
  );
};

const Main = styled.section`
  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
  }
  .react-slideshow-container .default-nav:last-of-type {
    display: none;
  }
  .react-slideshow-container .default-nav:first-of-type {
    display: none;
  }

  .bhn {
    img {
      width: 100%;
      max-height: 270px;
      min-height: 150px;
    }
  }

  .main1 {
    background-color: #033d5a;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
  }

  body {
    font-family: Verdana, sans-serif;
    margin: 0;
  }
  .mySlides {
    display: none;
  }
  img {
    vertical-align: middle;
  }

  .sliderup {
    display: block;
    background-color: #f1f3f6;
  }
  /*   MAIN 2   CSS  DESIGN  ========= */

  .main2 {
    display: block;
    flex: auto;
    width: 100%;
    height:320px; 
    text-align: center;
    background-color: ${({ theme }) => theme.colors.backgrountColorGray};
  }
  .main2 .wlcm1 { 
    padding-top: 20px;
    display: inline-flex;
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    color: ${({ theme }) => theme.colors.headerTextColor};
  }
  .main2 .wlcm2 
    {  
    font-size: 38px;
    font-weight: 800; 
    color: ${({ theme }) => theme.colors.backgroundBlue};
  }
  .main2 .wlcm4 {
    padding-bottom: 20px;
    padding-top:10px;
  }
  .main2 .wlcm3 span {
    padding-top:15px; 
    display: inline-block;
    color: ${({ theme }) => theme.colors.headerTextColor};
    padding-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    margin-left: 10%;
    margin-right: 10%;
  }

  .wlcm1 span::after,
.wlcm1 span::before {
  background-color: ${({ theme }) => theme.colors.backgroundYellow};
  text-align: center;
  position: relative;
  top: -8px;
  margin-left: 10px;
  display: inline-flex;
  content: "";
  box-sizing: border-box;
  border: 0.4rem solid ${({ theme }) => theme.colors.backgroundYellow};
  width: 1.7em;
  border-radius: 2.5rem;
  transform: rotate(180deg);
}
.wlcm1 span::before {
  margin-right: 10px;
}
  .main2 .wlcm4 span:before {
    background-color: ${({ theme }) => theme.colors.backgroundBlue};
    position: relative;
    display: inline-block;
    content: "";
    border: 2.6px solid ${({ theme }) => theme.colors.backgroundBlue};
    width: 24px;
    border-radius: 2.5em;
     margin: 0;
    transform: rotate(90deg);
  }
  .wlcm2 p {
    font-style: oblique;
    color: ${({ theme }) => theme.colors.headerTextColor};
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    font-weight: bold;
    height:30px; 
    padding-top: 5px;
  }

  @media screen and (max-width: 500px) {
    .main2 .wlcm1 span {
      font-size: 25px;
    }
    .main2 .wlcm2 span {
      font-size: 24px;
      font-weight: bolder;
    }
  }

  /*    APPLICATION PROCESS   CSS DESIGN*/

  /* MAIN3  DESIGN STYLE  */
  .latest-news-container {
  overflow: hidden;
  height: 150px; /* Adjust height as needed */
}

.latest-news-ul {
  margin: 0;
  padding: 0;
  list-style: none;
  animation: scroll-up 15s linear infinite; /* Adjust animation duration as needed */
}

.latest-news-ul li {
  margin-bottom: 0px; /* Adjust spacing between items */
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

  .main3 {
    background-color: ${({ theme }) => theme.colors.backgroundBlue};
  }
  .announcement1 {
    width: 100%;
    display: block;
  }
  .announcements1 {
    display: flex;
    width: 100%;
    justify-content: right;
  }
  .main3 .announcement11 {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: inline-flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: stretch;
    align-items: center;
    justify-content: center;
    align-items: stretch;
  }
  .announcements1 .ansment1 {
    display: flex;
    font-family: "Segoe UI", sans-serif;
    padding: 6px 18px 6px 14px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.backgroundYellow};
  }

  .announcements .announcements2 {
  
    width: 85%;
    margin-left: 0px;
    margin-right: 0px;
    height: auto;
    margin-bottom: 30px;
    display: block;
  }
  .fa {
    font: normal normal normal 14px/1 fontawesome;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translate(0, 0);
  }
  .announcements2 ul {
    display: block;
    width: 100%;
    height: 150px;
    min-width: 250px; 
    margin-left: 30px;
  }

  .announcements2 ul li {
    cursor: pointer;
    padding-bottom: 10px;
    color: white;
    font-family: serif;
    letter-spacing: 2px;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
  }

  /*    MOBILE RESPONSIVE */

  @media screen and (max-width: 700px) {
    .main3 {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      overflow: hidden;
      display: block;
    }

    .announcements .announcements1 {
      display: flex;
      width: 100%;
      justify-content: left;
    }
  }
`;

export default Home;
