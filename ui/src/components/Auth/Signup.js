import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContainer, AuthCard, AuthTitle, AuthSubtitle, AuthInput, AuthButton, AuthLink, AuthError } from "./AuthStyles";

const Signup = ({ onSignup }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            
            if (res.ok) {
                const data = await res.json();
                onSignup(data.username);
            } else {
                const text = await res.text();
                setError(text || "Error creating account");
            }
        } catch (err) {
            setError("Network error connecting to server");
        }
    };

    return (
        <AuthContainer>
            <AuthCard>
                <AuthTitle>Create Account</AuthTitle>
                <AuthSubtitle>Sign up to start using Selenoid UI</AuthSubtitle>
                
                {error && <AuthError>{error}</AuthError>}
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <AuthInput 
                        type="text" 
                        placeholder="Choose a Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <AuthInput 
                        type="password" 
                        placeholder="Create a Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        minLength={6}
                    />
                    <AuthButton type="submit">Sign Up</AuthButton>
                </form>
                
                <AuthSubtitle>
                    Already have an account? <Link to="/login"><AuthLink>Log in</AuthLink></Link>
                </AuthSubtitle>
            </AuthCard>
        </AuthContainer>
    );
};

export default Signup;
