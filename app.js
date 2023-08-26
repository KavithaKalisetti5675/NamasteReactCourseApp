/**
 * let's try to generate DOM tree using react
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h1>
 *      </div>
 *  </div>
 */

const parent = React.createElement
(
    "div", {id: "parent"},
    React.createElement
    (
        "div", {id: "child"},
        [
        React.createElement
        (
            "h1", {},
            "I'm h1 tag"
        ),
        React.createElement
        (
            "h2", {},
            "I'm h2 tag"
        ),
        ]
    )
);


// const heading = React.createElement("h1",{ id: "heading" },"Hello World from React!");
//insert h1 tag
// React needs to  have a root to do all dom stuff
const root = ReactDOM.createRoot(document.getElementById("root"));

//render h1 tag into the created Root
root.render(parent);