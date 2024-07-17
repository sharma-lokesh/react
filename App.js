/*const heading = React.createElement("h1", {id: "heading"}, "Hello World from React !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="head" tabIndex="5"> Hello world from jsxHeading</h1>;



/*
React component
    class based component - old way
    functional component  - new way
React Function Component - Just a normal JS function
**/
//Eg:React Function Component - Just a normal JS function which returns a React Element (or JSX code)
const HeadingComponent1 = () => {
    return <h1>React Functional Component</h1>
};
//same thing as above 
const HeadingComponent2 = () =>  <h1>React Functional Component</h1>;

const elem = <span>React span Element </span>
const title = (
    <h1 className="head" tabIndex="4">
        {elem}
        React from JSX
    </h1>
);

const HeadingComponent = () => (
    <div id = "container">
        {title}
        <h1 className="heading">Hello from React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

//Component Composition === component inside a component