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

//React Element
const jsxHeading = <h1 id={"heading"}>React using JSX</h1>
const number = 105;
//React Functional Component
//With return
const HeadingComponentWithReturn = () => {
    return <h1>Functional component using return </h1>
}

// Without return when single react element
const HeadingComponent2 = () => <h1>Functional component 1</h1>;

// Without return when multiple react elements wrapping them up with ()
const HeadingComponentWithBraces = () => (
    <div>
        {jsxHeading}
        <h1>{number*10}</h1>
        <h1>Functional component with braces</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//render h1 tag into the created Root
root.render(<HeadingComponentWithBraces/>);