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
        <div class="main3 ">
          <div class="announcements ">
            <div class="announcement11">
              <div class="announcements1" style={{ justifyContent: "left" }}>
                <h4 class="ansment1">Announcements</h4>
              </div>
              <div class="announcements2 ">
                <FontAwesomeIcon
                  className="pt-2 pb-0 bg-pink"
                  icon="fa-solid fa-caret-up "
                  style={{ fontSize: "2.5rem", color: "white" }}
                />
                <div className="latest-news text-white">
                  <marquee className="marquee-container" direction="up">
                    <ul className="latest-news-ul ">
                      <h4>
                        Documents for empanellment of vendor for A Class
                        contyractor
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        PhD Registration Form for Selected Candidates
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        31 mar 2022 Instituitional Distinctiveness{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Documents for empanellment of vendor for A Class
                        contyractor
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        16 feb 2022 Ph D merit list Part 02_16 feb 2022
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        17 Oct 2022 Consolidate academic Calender{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Participation in Climate Correction Day (CCD) Challenge
                        for Mission LiFE{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Documents for empanellment of vendor for A Class
                        contyractor
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        School of Architecture College Level counselling 2022-23{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        Participation in Climate Correction Day (CCD) Challenge
                        for Mission LiFE{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        17 Oct 2022 Consolidate academic Calender{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Participation in Climate Correction Day (CCD) Challenge
                        for Mission LiFE{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Documents for empanellment of vendor for A Class
                        contyractor
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>{" "}
                      </h4>
                      <h4>
                        {" "}
                        17 Oct 2022 Consolidate academic Calender{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Participation in Climate Correction Day (CCD) Challenge
                        for Mission LiFE{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        Documents for empanellment of vendor for A Class
                        contyractor
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        School of Architecture College Level counselling 2022-23{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                      <h4>
                        {" "}
                        Participation in Climate Correction Day (CCD) Challenge
                        for Mission LiFE{" "}
                        <span className="badge badge-secondary text-danger bg-white p-1">
                          New
                        </span>
                      </h4>
                    </ul>
                  </marquee>
                </div>
                {/* <ul id="announcementlist" className="m-0">
                  {notificationDetail.map((cremt) => {
                    const { notification, link } = cremt;
                    return (
                      <li> 
                        {notification} ,{link}
                      </li>
                    );
                  })}
                </ul> */}
                <FontAwesomeIcon
                  icon="fa-solid fa-caret-down "
                  style={{ fontSize: "2.5rem", color: "white" }}
                />
              </div>
            </div>
          </div>
          {/* <table class="table table-bordered">
              <tbody>
              </tbody>
            </table> */}
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
    text-align: center;
    background-color: ${({ theme }) => theme.colors.backgrountColorGray};
  }
  .main2 .wlcm1 {
    margin-top: 3px;
    display: inline-flex;
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    color: ${({ theme }) => theme.colors.headerTextColor};
  }
  .main2 .wlcm2,
  .wlcm4 {
    padding-top: 9px;
    display: block;
    font-size: 38px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.backgroundBlue};
  }
  .main2 .wlcm4 {
    padding-bottom: 15px;
  }
  .main2 .wlcm3 span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.headerTextColor};
    padding-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    margin-left: 15%;
    margin-right: 15%;
  }

  .main2 .wlcm1 span:after {
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
  .main2 .wlcm1 span:before {
    margin-right: 10px;
    text-align: center;
    top: -8px;
    position: relative;
    display: inline-flex;
    background-color: ${({ theme }) => theme.colors.backgroundYellow};
    content: "";
    box-sizing: border-box;
    border: 0.4rem solid ${({ theme }) => theme.colors.backgroundYellow};
    width: 1.7em;
    border-radius: 2.5rem;
    transform: rotate(180deg);
  }

  .main2 .wlcm4 span:before {
    background-color: ${({ theme }) => theme.colors.backgroundBlue};
    position: relative;
    display: inline-block;
    content: "";
    border: 2.6px solid ${({ theme }) => theme.colors.backgroundBlue};
    width: 24px;
    border-radius: 2.5em;
    margin: 10px;
    transform: rotate(90deg);
  }
  .wlcm2 p {
    font-style: oblique;
    color: ${({ theme }) => theme.colors.headerTextColor};
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeL};
    font-weight: bold;
  }

  @media screen and (max-width: 500px) {
    .main2 .wlcm1 span {
      font-size: 25px;
    }
    .main2 .wlcm2 span {
      font-size: 26px;
    }
  }

  /*    APPLICATION PROCESS   CSS DESIGN*/

  /* MAIN3  DESIGN STYLE  */

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
  }

  .announcements2 ul li {
    cursor: pointer;
    padding-bottom: 10px;
    color: white;
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
