import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import './LoginPage.css';  // Import the CSS file

export default function LoginPage() {

    const navigate = useNavigate();  // Use navigate from react-router-dom

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        // Always navigate to courses page no matter what
        navigate('/courses');

    
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <div className="login-header">
                    <h2>Login to your account</h2>
                    <p>Welcome back!</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="login-label">Email address:</label>
                    <input onChange={e => { setEmail(e.target.value) }} type="email" className="login-input" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="login-label">Password:</label>
                    <input onChange={e => { setPassword(e.target.value) }} type="password" className="login-input" id="password" />
                </div>
                <button type="submit" className="login-button">LOG IN</button>
                <p style={{ marginTop: "2vh" }}>
                    Don't have an account? <Link to={'/register'} className="login-link">Create an account</Link>
                </p>
            </form>
        </div>
    );
}
