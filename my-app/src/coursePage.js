//the purpose of this page is where you see all course

//need a nav bar
   //need a link to course 
    //need a link to calendar
   //need a link to opportunities
   //need a link to profile


//main page
//need lessons 1 through 8 to be listed horizontally
//need the same structure for the capstone button
//

import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePage.css';

export default function CoursePage() {
  return (
    <div className="course-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/courses" className="nav-item">Courses</Link></li>
          {/* <li><Link to="/calendar" className="nav-item">Calendar</Link></li> */}
          <li><Link to="/opportunities" className="nav-item">Opportunities</Link></li>
          <li><Link to="/profileupdate" className="nav-item">Profile</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h1>Available Lessons</h1>
        <div className="lessons-container">
          {/* Listing Lessons 1 through 8 horizontally */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="lesson-item">
              <button className="lesson-button">Lesson {index + 1}</button>
            </div>
          ))}
        </div>

        {/* Capstone Project Button */}
        <div className="capstone-container">
          <button className="capstone-button">Capstone Project</button>
        </div>
      </div>
    </div>
  );
}
