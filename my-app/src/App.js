import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './FGN-removebg-preview.png';  // Your logo
import './App.css';  // Your CSS file
import './CoursePage.css';
import './oppertunities.css';
import './calendarPage.css';
import './Forum.css';
import LoginPage from './LoginPage';  // Login Page component
import SignUpForm from './SignUpForm';  // Registration form component (SignUpForm)

import TutoringDash from './tutoringdash';
import CoursePage from './coursePage';
import CalendarPage from './calendarpage';
import Oppertunities from './oppertunities';
import AttendanceQuiz from './AttendanceQuiz';
import { useState } from "react";


import Forum from './Forum';

// Home Page Component
function HomePage() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <p>Select your role</p>
        </div>
        <div className="button-container">
          <Link to="/login" className="App-button">
            <button className="App-button">Student</button>
          </Link>
          <Link to="/tutoringdash" className="App-button">
            <button className="App-button">Tutor</button>
          </Link>
        </div>
        <div className="App-footer">
          <Link to="/register">
            <button className="button">Don't have an account? Sign up</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

// Main App Component with Routing
function App() {
  const [progress, setProgress] = useState(0);

  const handleProgressData =(progressData) =>{
    setProgress(progressData)
    console.log(progress)
  }
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route for the registration page */}
        <Route path="/register" element={<SignUpForm />} />

        <Route path="/tutoringdash" element={<TutoringDash />} />
        {/*Temporary CoursePage*/}
        <Route path="/courses" element={<CoursePage progress={progress} onProgressChange={handleProgressData} />} />

        {/*Temporary CalendarPage*/}
        <Route path="/calendar" element={<CalendarPage/>} />

        <Route path="/oppertunities" element={<Oppertunities/>} />

        <Route path="/Forum" element={<Forum/>} />

        <Route path="/AttendanceQuiz" element={<AttendanceQuiz progress={progress} handleProgressData={handleProgressData}/>} />

      </Routes>
    </Router>
  );
}

export default App;



