/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Links } from "./Links";
import { CustomRouter } from "./CustomRouter";

function App() {
    return (
        <div className="App">
            Hello world
            <Router>
                <Links />
                <CustomRouter />
            </Router>
        </div>
    );
}

export default App;
