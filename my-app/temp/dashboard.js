import './dashboardcss.css';

function App() {
  return (
    <header className = "header">
        <a href="/" className = "home">Home</a>
        <nav className = "navbar">
            <a className = "courselink" href = "courses.html">Courses</a>
            <a className = "calendarlink" href = "calendar.html">Calendar</a>
            <a className = "opportunitylink" href = "opportunities.html">Opportunities</a>
        </nav>
    </header>
  );
}

export default App;
