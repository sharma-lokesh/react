/*const heading = React.createElement("h1", {id: "heading"}, "Hello World from React !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id:"child"}, 
[React.createElement("h1", {id:"heading"}, "I'm an H1 tag"),
React.createElement("h2", {id:"h2heading"}, "I'm an H2 tag")]
)
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);