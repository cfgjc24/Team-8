import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePage.css';
import './calendarPage.css';

export default function CalendarPage() {
  return (
    <div className="course-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/courses" className="nav-item">Courses</Link></li>
          <li><Link to="/caleddar" className="nav-item">Calendar</Link></li>
          <li><Link to="/opportunities" className="nav-item">Opportunities</Link></li>
          <li><Link to="/profile" className="nav-item">Profile</Link></li>
        </ul>
      </nav>

      {/* Google Calendar Embed */}
      <div className="calendar-container">
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=f9e0eee7c5ed8ffcc2be23d9bc4a83b87124e39b3d6cac267307ad1f77d9f809%40group.calendar.google.com&ctz=America%2FNew_York" 
          style={{ border: 'none', width: '800px', align: 'center', height: '700px' }} 
          frameBorder="0" 
          scrolling="no" 
          title="Google Calendar"
        />
      </div>
    </div>
  );
}
