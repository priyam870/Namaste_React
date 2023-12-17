/*
    <div id="parent">
        <div id="child">
            <h1>"This is a h1 tag"</h1>
            <h2>"This is h2 tag"</h2>
        </div>
        <div id="child">
            <h1>"This is h1 tag"</h1>
            <h2>"This is h2 tag"</h2>
        </div>
    </div>
*/

const h1 = React.createElement("h1", {}, "This is a h1 tag");
const h2 = React.createElement("h2", {}, "This is a h2 tag");

const child = React.createElement("div", {id: "child"}, [h1, h2]);

const parent = React.createElement("div", {id : "parent"},[child, child]);

// const newElement = React.createElement(
//     "h1", 
//     {
//         id : "heading"
//     }, 
//     "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);