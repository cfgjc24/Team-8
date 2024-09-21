import './SignUpForm.css';  // Ensure this CSS is imported
import { useState } from "react";

export default function Form() {
    // States for registration
    const [name, setName] = useState("");
    const [dateofbirth, setDateofBirth] = useState("");
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [parentname, setParentName] = useState("");
    const [parentemail, setParentEmail] = useState("");
    const [password, setPassword] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the form fields
    const handleName = (e) => setName(e.target.value);
    const handleDateofBirth = (e) => setDateofBirth(e.target.value);
    const handleSchool = (e) => setSchool(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleParentName = (e) => setParentName(e.target.value);
    const handleParentEmail = (e) => setParentEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => submitted && (
        <div className="success">
            <h1>User {name} successfully registered!</h1>
        </div>
    );

    // Showing error message
    const errorMessage = () => error && (
        <div className="error">
            <h1>Please enter all the required fields</h1>
        </div>
    );

    return (
        <div className="SUApp">
            <div className="SUApp-form">
                <header className="SUApp-header">
                    <h1>FIRST GENERATION INVESTORS</h1>
                    <h2>Sign Up Now!</h2>
                </header>

                {/* Displaying messages */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                    <label className="SUApp-label">Name</label>
                    <input onChange={handleName} className="SUApp-input" value={name} type="text" />

                    <label className="SUApp-label">Date of Birth</label>
                    <input onChange={handleDateofBirth} className="SUApp-input" value={dateofbirth} type="date" />

                    <label className="SUApp-label">School</label>
                    <input onChange={handleSchool} className="SUApp-input" value={school} type="text" />

                    <label className="SUApp-label">Email</label>
                    <input onChange={handleEmail} className="SUApp-input" value={email} type="email" />

                    <label className="SUApp-label">Parent Name</label>
                    <input onChange={handleParentName} className="SUApp-input" value={parentname} type="text" />

                    <label className="SUApp-label">Parent Email</label>
                    <input onChange={handleParentEmail} className="SUApp-input" value={parentemail} type="email" />

                    <label className="SUApp-label">Password</label>
                    <input onChange={handlePassword} className="SUApp-input" value={password} type="password" />

                    <button onClick={handleSubmit} className="SUApp-button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
