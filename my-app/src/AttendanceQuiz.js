import { useState,useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './AttendanceQuiz.css'; // Make sure to create this file and include the CSS

export default function AttendanceQuiz({progress, handleProgressData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [difficult, setDifficult] = useState("");
  const [experience, setExperience] = useState("");
  const [additional, setAdditional] = useState("");
  const [school, setSchool] = useState("Select School");
  const [session, setSession] = useState("Select Session");
  
  const [confidence, setConfidence] = useState("");
  const [belonging, setBelonging] = useState("");
  //const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    setSchool(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank You! Your attendance has been recorded');
    const newProgress =progress+11
    handleProgressData(newProgress)
    // setProgress((prevProgress) => {
    //     console.log(prevProgress)
        
    //     sendProgressNumber(newProgress)
    //     return newProgress
    // });
    console.log({ name, email, difficult, experience, additional, school, session, confidence, belonging });
  };

//   const sendProgressNumber = (nProgress)=>{
//     onSendProgress(nProgress);
//   }

  useEffect(()=>{
    console.warn(progress)
    //sendProgressNumber()    
},[progress])


  return (
    <div className="attendance-container">
      <form className="attendance-form" onSubmit={handleSubmit}>
        <div className="attendance-header">
          <h2>FGI Attendance Form</h2>
          <p>This is a required weekly attendance form to be filled out by the student.</p>
        </div>

        <label className="attendance-label">Enter your full name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="attendance-input"
          />
        </label>

        <label className="attendance-label">Enter your email:
          <input
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="attendance-input"
          />
        </label>

        <label className="attendance-label">Session Attendance:
          <select value={session} onChange={(e) => setSession(e.target.value)} className="attendance-input">
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
        </label>

        <label className="attendance-label">Cohort:
          <select value={school} onChange={handleChange} className="attendance-input">
            <option value="Please Select">Please Select</option>
            <option value="Harmony High School">Harmony High School</option>
            <option value="King High School">King High School</option>
            <option value="On Track Academy">On Track Academy</option>
          </select>
        </label>

        <label className="attendance-label">What was the most difficult / confusing part of this lesson?:
          <input
            type="text" 
            value={difficult}
            onChange={(e) => setDifficult(e.target.value)}
            className="attendance-input"
          />
        </label>

        <label className="attendance-label">How confident do you feel about the topics covered today?</label>
        <div className="radio-group">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="radio-label">
              <input
                type="radio"
                value={num}
                checked={confidence === String(num)}
                onChange={(e) => setConfidence(e.target.value)}
              />
              {num}
            </label>
          ))}
        </div>

        <label className="attendance-label">I feel a strong sense of belonging, community, and bond with the students and tutors in my group.</label>
        <div className="radio-group">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="radio-label">
              <input
                type="radio"
                value={num}
                checked={belonging === String(num)}
                onChange={(e) => setBelonging(e.target.value)}
              />
              {num}
            </label>
          ))}
        </div>

        <label className="attendance-label">What can we do to make the FGI experience better?:
          <input
            type="text" 
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="attendance-input"
          />
        </label>

        <label className="attendance-label">Any additional questions, comments, or concerns?
          <input
            type="text" 
            value={additional}
            onChange={(e) => setAdditional(e.target.value)}
            className="attendance-input"
          />
        </label>

        <button type="submit" className="attendance-button">Submit</button>
      </form>
    </div>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<MyForm />);
