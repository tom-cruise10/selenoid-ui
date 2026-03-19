import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Viewport from "./containers/Viewport";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { GlobalStyle } from "./containers/Viewport/styles.css";

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/me")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Not authenticated");
            })
            .then((data) => {
                setUser(data.username);
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#272727", color: "#00c6f4", fontFamily: 'Inter, sans-serif' }}>
                Loading...
            </div>
        );
    }

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login onLogin={setUser} />}
                </Route>
                <Route path="/signup">
                    {user ? <Redirect to="/" /> : <Signup onSignup={setUser} />}
                </Route>
                <Route path="/">
                    {user ? <Viewport /> : <Redirect to="/login" />}
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
