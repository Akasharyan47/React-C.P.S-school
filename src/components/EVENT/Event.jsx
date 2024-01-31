import React from 'react';
import './event.css';

function Event() {
  return (
    <div className="main-content  w-100 d-flex justify-content-center "> 
      <div className="main-section bg-light">
        <div className="container row  justify-content-center">
          <div className="event  col-md-4">
            <h2 className="heading">Recent Event</h2>
            <div className=' '>
            <marquee direction="up">
        <ul class="latest-news-ul">
          <li> 31 mar 2022 Ph D merit list Part 01_16 feb 2022 <img src="images/latest-news-blink-img.gif" /></li>
          <li> 31 mar 2022 Ph D merit list Part 02_16 feb 2022 <img src="images/latest-news-blink-img.gif" /> </li>
          <li> 24 May 2022 Incubation Center <img src="images/latest-news-blink-img.gif" /></li>
          <li> 31 mar 2022 Instituitional Distinctiveness <img src="images/latest-news-blink-img.gif" /></li>
          <li> 31 mar 2022 Academic Calender Session 2019-20 <img src="images/latest-news-blink-img.gif" /></li>
          <li> 16 feb 2022 Ph D merit list Part 01_16 feb 2022 <img src="images/latest-news-blink-img.gif" /></li>
          <li> 16 feb 2022 Ph D merit list Part 02_16 feb 2022 <img src="images/latest-news-blink-img.gif" /></li>
          <li> 17 Oct 2022 Consolidate academic Calender <img src="images/latest-news-blink-img.gif" /></li>
        </ul>
        </marquee>
            </div>
          </div>

          <div className="event campus-news col-md-4">
            <h2 className="heading column">Campus News</h2>
            <div>
              <ul>
                <li>
                  <span className="campus-img">
                    {/* <img src="images/campus-1.png" alt="Campus 1" /> */}
                  </span>
                  <h2>There are many variations.</h2>
                  <h6>Sep. 04, 2012</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </li>
                <li>
                  <span className="event-img">
                    {/* <img src="images/campus-2.png" alt="Campus 2" /> */}
                  </span>
                  <h2>There are many variations.</h2>
                  <h6>Sep. 04, 2012</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </li>
                {/* Add more campus news */}
              </ul>
            </div>
          </div>

          <div className="event col-md-4">
            <h2 className="heading">College Event Calendar</h2>
            <div className="column">
              <ul>
                <li>
                  <span className="event-date">11 <br /> April</span> Lorem Ipsum is simply dummy text of the printing text printing industry...
                </li>
                <li>
                  <span className="event-date">19 <br /> May</span> Lorem Ipsum is simply dummy text of the printing industry dummy text...
                </li>
                <li>
                  <span className="event-date">11 <br /> June</span> Lorem Ipsum is simply dummy text of the printing text printing industry...
                </li>
                <li>
                  <span className="event-date">19 <br />July</span> Lorem Ipsum is simply dummy text of the printing industry dummy text...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
