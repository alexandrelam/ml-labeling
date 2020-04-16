import React from "react";
import "./App.css";
import Headerbar from "./components/Headerbar";
import Sidebar from "./components/Sidebar";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <Headerbar />
      </Layout>
        <Sidebar />
    </div>
  );
}

export default App;
