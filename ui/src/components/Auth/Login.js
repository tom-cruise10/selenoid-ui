import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContainer, AuthCard, AuthTitle, AuthSubtitle, AuthInput, AuthButton, AuthLink, AuthError } from "./AuthStyles";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            
            if (res.ok) {
                const data = await res.json();
                onLogin(data.username);
            } else {
                const text = await res.text();
                setError(text || "Invalid credentials");
            }
        } catch (err) {
            setError("Network error connecting to server");
        }
    };

    return (
        <AuthContainer>
            <AuthCard>
                <AuthTitle>Welcome Back</AuthTitle>
                <AuthSubtitle>Sign in to Selenoid UI to continue securely</AuthSubtitle>
                
                {error && <AuthError>{error}</AuthError>}
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <AuthInput 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <AuthInput 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <AuthButton type="submit">Sign In</AuthButton>
                </form>
                
                <AuthSubtitle>
                    Don't have an account? <Link to="/signup"><AuthLink>Sign up</AuthLink></Link>
                </AuthSubtitle>
            </AuthCard>
        </AuthContainer>
    );
};

export default Login;
