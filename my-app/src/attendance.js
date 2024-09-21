import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [difficult, setDifficult] = useState("");
  const [experience, setExperience] = useState("");
  const [additional, setAdditional] = useState("");
  const [school, setSchool] = useState("Select School"); 
  const [session, setSession] = useState("Select Session"); 

  const handleChange = (event) => {
    setSchool(event.target.value)
  }

  return (
    <form>
    <div style={{ marginBottom: '1rem' }}>
        <label>FGI Attendance Form</label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>This is a required weekly attendance form to be filled out by the student.</label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Enter your full name :
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Enter your email :   
          <input
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div> 

      <div style={{ marginBottom: '1rem' }}>
            <label>Session Attendance:  </label>
              <select value={session} onChange={handleChange}>
                <option value="Please Select">Please Select</option>
                <option value="Session 1">Session 1</option>
                <option value="Session 2">Session 2</option>
                <option value="Session 3">Session 3</option>
                <option value="Session 4">Session 4</option>
                <option value="Session 5">Session 5</option>
                <option value="Session 6">Session 6</option>
                <option value="Session 7">Session 7</option>
                <option value="Capstone Project- Presentation">Capstone Project- Presentation</option>
              </select>
      </div>

     <div style={{ marginBottom: '1rem' }}>
            <label>Cohort:  </label>
              <select value={school} onChange={handleChange}>
                <option value="Please Select">Please Select</option>
                <option value="Harmony High School">Harmony High School</option>
                <option value="King High School">King High School</option>
                <option value="On Track Academy">On Track Academy</option>
              </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>What was the most difficult / confusing part of this lesson? :
          <input
            type="text" 
            value={difficult}
            onChange={(e) => setDifficult(e.target.value)}
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>What can we do to make the FGI experience better? :
          <input
            type="text" 
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Any additional questions, comments, or concerns?
          <input
            type="text" 
            value={additional}
            onChange={(e) => setAdditional(e.target.value)}
          />
        </label>
      </div>

    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);