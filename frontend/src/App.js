import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Headerbar from "./components/Headerbar";

function App() {
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");

    return (
        <div className="App">
            <Headerbar  username={username} token={token} setToken={setToken}/>
            {token.length !== 0 ? <Home token={token}/> : <Login setUsername={setUsername} setToken={setToken} token={token} />}
        </div>
    );
}

export default App;
