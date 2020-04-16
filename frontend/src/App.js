import React from "react";
import "./App.css";
import Headerbar from "./components/Headerbar";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Headerbar />
      <Layout>
        <Sidebar />
        <Canvas />
      </Layout>
    </div>
  );
}

export default App;
