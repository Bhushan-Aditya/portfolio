import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio"; // Ensure this file is `Portfolio.js` in `src`
import "./index.css"; // Ensure `index.css` exists in `src`

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Portfolio />
    </React.StrictMode>
);


