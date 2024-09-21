import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './FGN-removebg-preview.png';  // Your logo
import './App.css';  // Your CSS file
import LoginPage from './LoginPage';  // Login Page component
import SignUpForm from './SignUpForm';  // Registration form component (SignUpForm)


// Home Page Component
function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <p>Please choose your role</p>
        </div>
        <div className="button-container">
          <Link to="/login" className="App-button">
            <button className="App-button">Student</button>
          </Link>
          <Link to="/login" className="App-button">
            <button className="App-button">Tutor</button>
          </Link>
          <Link to="/login" className="App-button">
            <button className="App-button">Admin</button>
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
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route for the registration page */}
        <Route path="/register" element={<SignUpForm />} />

      </Routes>
    </Router>
  );
}

export default App;



