import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePage.css';
import './oppertunities.css';
import './oppertunities';
import './calendarpage';
import './calendarPage.css';
import './Forum';

export default function CoursePage() {
  return (
    <div className="course-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/courses" className="nav-item">Courses</Link></li>
          <li><Link to="/calendar" className="nav-item">Calendar</Link></li>
          <li><Link to="/oppertunities" className="nav-item">Opportunities</Link></li>
          <li><Link to="/Profile" className="nav-item">Profile</Link></li>
          <li><Link to="/Forum" className="nav-item">Forum</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h1>Available Lessons</h1>
        <div className="lessons-container">
          {/* Lesson 1 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/1-personal-finance" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 1</button>
            </a>
          </div>

          {/* Lesson 2 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/2-what-is-a-stock" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 2</button>
            </a>
          </div>

          {/* Lesson 3 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/3-volatility-and-diversification" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 3</button>
            </a>
          </div>

          {/* Lesson 4 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/4-what-is-a-bond" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 4</button>
            </a>
          </div>

          {/* Lesson 5 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/5-mutual-fundsetfs" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 5</button>
            </a>
          </div>

          {/* Lesson 6 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/6-compound-interest-and-dca" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 6</button>
            </a>
          </div>

          {/* Lesson 7 */}
          <div className="lesson-item">
            <a href="https://sites.google.com/view/fgistudent/curriculum/7-personal-finance-2-0" target="_blank" rel="noopener noreferrer">
              <button className="lesson-button">Lesson 7</button>
            </a>
          </div>
        </div>

        {/* Capstone Project Button */}
        <div className="capstone-container">
          <a href="https://sites.google.com/view/fgistudent/curriculum/capstone-project" target="_blank" rel="noopener noreferrer">
            <button className="capstone-button">Capstone Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

