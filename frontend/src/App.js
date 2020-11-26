import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Headerbar from "./components/Headerbar";

function App() {
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [rememberMe, setRememberMe] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            setUsername(localStorage.getItem("username"));
            setToken(localStorage.getItem("token"));
        }
    }, []);

    return (
        <div className="App">
            <Headerbar username={username} token={token} setToken={setToken} />
            {token.length !== 0 ? (
                <Home token={token} />
            ) : (
                <Login
                    rememberMe={rememberMe}
                    setRememberMe={setRememberMe}
                    setUsername={setUsername}
                    setToken={setToken}
                />
            )}
        </div>
    );
}

export default App;
