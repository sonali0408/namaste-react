//** Creating heading using JS */
const heading1 = document.createElement("h2");
heading1.innerHTML = "Hello again from Java Script!!";
const root1 = document.getElementById("jsroot");
root1.appendChild(heading1);

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { class: "heading" }, "I am an h1 tag"),
        React.createElement("h2", { class: "heading1" }, "I am an h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { class: "heading" }, "I am an h1 tag"),
        React.createElement("h2", { class: "heading1" }, "I am an h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);