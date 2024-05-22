import React from 'react'
import ReactDOM from 'react-dom/client'

console.log("React",React); // React { version: '16.13.1', ... }
console.log("ReactDOM",ReactDOM);

const heading1= React.createElement("h1",{className:"heading1"},"1.CSK");   //React Element
console.log("heading1",heading1);

const heading11 = <h1 className='heading1'>Heading11</h1>;      //React Element using JSX
console.log("heading 11",heading11);

//FUNCTION BASED COMPONENTS
const Component = () =>{
    return(
        <div>I am a functional component</div>
    )
}
const Component1 = () =><div>I am a functional component</div>

function Component2(){
    return(
        <div>I am a functional component</div>
    )
}

const heading2= React.createElement("h2",{className:"heading2"},"2.MI");

const container1= React.createElement("div",{className:"container"},[heading1,heading11,heading2]);  //heading1 element appended in container1
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);
