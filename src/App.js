import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import Login from "../src/components/HEADER/Login.jsx";
import About from "./components/ABOUT/About.js";
import Admission from "./components/ADMISSION/Admission";
import Teacher from "./components/TEACHER/Teacher";
import Home from "./components/HOME/Home";
import Academics from "./components/ACADEMICS/Academics";
 import StudentDetail from "./components/STUDENT_DETAIL/StudentDetails.js";
import StudentResult from "./components/STUDENT_RESULT/StudentResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HEADER/Header.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Dashboard from "./components/DASHBOARD/dashboard.jsx"
// import { Provider } from "react-redux";
// import { store } from "./app/store";

const App = () => {
  const theme = {
    fontSize: {
      headerfontSizeH: "1.8rem",
      headerfontSizeM: "1.4rem",
      headerfontSizeL: "1.2rem",
      headingfontSize: "2.3rem",
    },
    colors: {
      heading: "rgb(24 24 29)",
      headerTextColor: "#262626d0",
      headerTextColorblack: "#202124",
      backgroundBlue: "#006599",
      backgroundYellow: "#FF9933",
      backgrountColorGray: "#f0f0f0e0", 
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Provider store={store}>   */}

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Teacher" element={<Teacher name={"newest"} />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/StudentDetails" element={<StudentDetail />} /> 
          <Route path="/StudentResult" element={<StudentResult />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>

        {/* </Provider>   */}

      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
