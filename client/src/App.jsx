import './styles/tailwind.css';
//import './styles/font-awesome.min.css';

import React from "react";

import { useEffect } from "react";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";
import LoginFormHOC from "./components/form/LoginFormHOC";

const App = () => {

    useEffect(() => {
        applyTheme(baseTheme);
    }, []);

    const baseClickHandle = () => {
        applyTheme(baseTheme)
    }

    const darkClickHandle = () => {
        applyTheme(darkTheme)
    }

    return <LoginFormHOC />

}
export default App;


