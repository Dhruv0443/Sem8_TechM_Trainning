// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const header = <h1>Hello, React!</h1>;
// // Get the root element
// const rootElement = document.getElementById("root");
// //Create a root and render the header
// const root = ReactDOM.createRoot(rootElement);
// root.render(header);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));
//Create a root and render the header
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
