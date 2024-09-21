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
          <li><Link to="/calendar" className="nav-item">Calendar</Link></li>
          <li><Link to="/opportunities" className="nav-item">Opportunities</Link></li>
          <li><Link to="/profile" className="nav-item">Profile</Link></li>
        </ul>
      </nav>

      {/* Google Calendar Embed */}
      <div className="calendar-container">
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=c2luZ2gua2FzdmlAZ21haWwuY29t&src=ZjllMGVlZTdjNWVkOGZmY2MyYmUyM2Q5YmM0YTgzYjg3MTI0ZTM5YjNkNmNhYzI2NzMwN2FkMWY3N2Q5ZjgwOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19hYzdkZWU3NjVhZDQ0ODNjNmFjNzRiOGRiNTRiNTk3NDI3MTVlOTQ0MzY4OTJkMTkzMzhkMTk1MjY4M2RjMWQyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%239E69AF&color=%23F6BF26&color=%237986CB" 
          style={{ border: 0, width: '100%', height: '600px' }} 
          frameBorder="0" 
          scrolling="no" 
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
}
