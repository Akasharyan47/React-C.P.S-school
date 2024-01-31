import React, { useState } from 'react';
import Dance from "../../IMAGE/dance.jpg" 
import Singing from '../../IMAGE/singing.jpg';
import Sports from "../../IMAGE/sports.jpg";
import Paint from "../../IMAGE/Paint.jpg";

function CIRRICULAR() {

  return (
    <div className="container">
      <div className="row">

        <div className="col-12 pb-3">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Sports} className="card-img" alt="Image 2" style={{ width: '300px', height: '200px' }}></img>
              </div>
              <div className="col-md-8 d-flex align-items-center ">
                <div className="card-body "> 
                  <p className="card-text h4">Sports play a crucial role in promoting physical fitness, teamwork, and a sense of camaraderie. Whether you're a professional athlete or just enjoy playing sports recreationally, it's a great way to stay active and healthy while having fun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 pb-3">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Paint} className="card-img" alt="Image 3"  style={{ width: '300px', height: '200px' }}></img>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body"> 
                  <p className="card-text h4">Painting is a beautiful form of visual art that allows artists to express their creativity and emotions on canvas. Whether you're an experienced painter or just enjoy exploring your artistic side, painting can be a deeply fulfilling and meditative activity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 pb-3">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Singing} className="card-img" alt="Image 4"  style={{ width: '300px', height: '200px' }}></img>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body"> 
                  <p className="card-text h4">Singing is a powerful form of musical expression that allows individuals to share their emotions, stories, and talent through their voices. Whether you're a professional singer or simply enjoy singing for fun, it's a wonderful way to connect with others through music.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 pb-3">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4 " >
                <img src={Dance} className="card-img" alt="Image 1" style={{ width: '300px',  height: '200px' }} ></img>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body"> 
                  <p className="card-text h4 "> Dancing is a form of self-expression and art. It's a way to convey emotions, tell stories, and connect with others through movement and rhythm. Whether you're a professional dancer or simply enjoy dancing for fun, it's a wonderful way to celebrate life and culture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CIRRICULAR