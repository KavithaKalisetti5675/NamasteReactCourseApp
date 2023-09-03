/**
 * let's try to generate DOM tree using react
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h1>
 *      </div>
 *  </div>
 */
import React from "react";
import ReactDOM from "react-dom";

//React Functional Component
//With return
const Title = () => {
    return <h1>React Course</h1>
}

// Without return when multiple react elements wrapping them up with ()
const HeadingComponentWithBraces = () => (
    <div>
        <Title/>
        <Title></Title>
        {Title()}
        <h1>Functional component with braces</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//render h1 tag into the created Root
root.render(<HeadingComponentWithBraces/>);