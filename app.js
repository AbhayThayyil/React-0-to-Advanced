const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "Hi I am child1"),
    React.createElement("h2", { id: "child2" }, "Hi I am child2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "Hi I am child1"),
    React.createElement("h2", { id: "child2" }, "Hi I am child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


    