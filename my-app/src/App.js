import logo from './FGN-removebg-preview.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <p>Please choose your role</p>
        </div>
        <div className="button-container">
          <button className="App-button">Student</button>
          <button className="App-button">Tutor</button>
          <button className="App-button">Admin</button>
        </div>
        <div className="App-footer">
          <button className="button">Don't have an account? Sign up</button>
        </div>
      </header>
    </div>
  );
}

export default App;
