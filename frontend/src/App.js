import React, { useState, useEffect } from "react";
import "./App.css";
import Headerbar from "./components/Headerbar";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { Layout } from "antd";

function App() {
    const [issueList, setIssueList] = useState([]);
    const [rectanglesList, setRectanglesList] = useState([]);
    const [reload, setReload] = useState(0);
    const [pagination, setPagination] = React.useState(0);

    const incrementReload = () => {
        console.log(issueList);
        console.log(rectanglesList);
        setReload(reload + 1);
    };

    const fetchIssue = () => {
        fetch(
            "http://127.0.0.1:8000/issue/",

            {
                method: "GET",
                headers: new Headers({
                    Authorization:
                        "token 46654af99a9f660cf865ebc44da19dd044049348",
                }),
            }
        )
            .then((res) => res.json())
            .then((res) => setIssueList(res));
    };

    const fetchRectangles = () => {
        fetch("http://127.0.0.1:8000/coord/", {
            method: "GET",
            headers: new Headers({
                Authorization: "token 46654af99a9f660cf865ebc44da19dd044049348",
            }),
        })
            .then((res) => res.json())
            .then((res) => setRectanglesList(res));
    };

    useEffect(() => {
        fetchIssue();
        fetchRectangles();
    }, [reload]);

    return (
        <div className="App">
            <Headerbar />
            <Layout>
                <Sidebar
                    issueList={issueList}
                    incrementReload={incrementReload}
                    pagination={pagination}
                />
                <Canvas
                    issueList={issueList}
                    rectanglesList={rectanglesList}
                    pagination={pagination}
                    setPagination={setPagination}
                />
            </Layout>
        </div>
    );
}

export default App;
