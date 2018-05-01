import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <header>
          <div className="header-main">
            <div className="profile-img">
              <img src="http://placehold.it/1000x500" alt="Profile Pic" />
            </div>
            <div className="profile-head">
              <h1>VISHNUVARTHAN</h1>
              <h3>WEB TECHNOLOGIST</h3>
              <h4>vvarthan7@gmail.com</h4>
              <h4>+91-80564-48446</h4>
            </div>
          </div>
          <nav>
            <ul>
              <li>Menu 1</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Resume;
