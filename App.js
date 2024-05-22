import React from 'react'
import ReactDOM from 'react-dom/client'

console.log("React",React); // React { version: '16.13.1', ... }
console.log("ReactDOM",ReactDOM);

const heading1= React.createElement("h1",{className:"heading1"},"1.CSK");
const heading2= React.createElement("h2",{className:"heading2"},"2.MI");

const container1= React.createElement("div",{className:"container"},[heading1,heading2]);  //heading1 element appended in container1
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);
