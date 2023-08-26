const heading = React.createElement("h1",{ id: "heading" },"Hello World from React!");

//insert h1 tag
// React needs to  have a root to do all dom stuff
const root = ReactDOM.createRoot(document.getElementById("root"));

//render h1 tag into the created Root
root.render(heading);