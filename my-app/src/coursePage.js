import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePage.css';
import './oppertunities.css';
import './oppertunities';
import './calendarpage';
import './calendarPage.css';



export default function CoursePage({progress}) {
  return (
    <div className="course-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/courses" className="nav-item">Courses</Link></li>
          <li><Link to="/calendar" className="nav-item">Calendar</Link></li>
          <li><Link to="/oppertunities" className="nav-item">Opportunities</Link></li>
          <li><Link to="/profile" className="nav-item">Profile</Link></li>
          <li><Link to="/profile" className="nav-item">Forum</Link></li>
        </ul>
      </nav>
    

      {/* Progress Bar*/}
      
      <div className="content">
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', marginTop: '10px' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: '#3b5998',
            borderRadius: '5px',
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>{progress}</div>
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

         {/* New Button at the Bottom */}
         <div className="bottom-button-container">
          <Link to="/AttendanceQuiz">
            <button className="attendance-button">Attendance Quiz!</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

