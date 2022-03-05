import './App.css';
import React from "react";
import FormPage from "./components/FormPage";
import ListPage from "./components/ListPage";

function App() {
    return (
        <div>
            <div className="formPage">
                <FormPage/>
            </div>

            <hr/>

            <div className="listPage">
                <ListPage/>
            </div>
        </div>
    );
}

export default App;
