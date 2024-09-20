// Filename - SignUpForm.js

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

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the Date of Birth change
    const handleDateofBirth = (e) => {
        setDateofBirth(e.target.value);
        setSubmitted(false);
    };

    // Handling the school change
    const handleSchool = (e) => {
        setSchool(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

     // Handling the parent name change
     const handleParentName = (e) => {
        setParentName(e.target.value);
        setSubmitted(false);
    };

     // Handling the parent email change
     const handleParentEmail = (e) => {
        setParentEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

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
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>FIRST GENERATION INVESTORS</h1>
                <h2>Sign Up Now!</h2>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="name"
                />

                <label className="label">Date of Birth</label>
                <input
                    onChange={handleDateofBirth}
                    className="input"
                    value={dateofbirth}
                    type="dateofbirth"
                />

                <label className="label">School</label>
                <input
                    onChange={handleSchool}
                    className="input"
                    value={school}
                    type="school"
                />

                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="parentname"
                />

                <label className="label">Parent Name</label>
                <input
                    onChange={handleParentName}
                    className="input"
                    value={parentname}
                    type="parentname"
                />
                <label className="label">Parent Email</label>
                <input
                    onChange={handleParentEmail}
                    className="input"
                    value={parentemail}
                    type="parentemail"
                />

                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
