const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, "Luna"),
    React.createElement("h2", { key: 2 }, "Dog"),
    React.createElement("h2", { key: 3 }, "Havanese"),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "myId" }, [
    React.createElement("h1", {key: "title-adopt-me" }, "Adopt Me!"),
    React.createElement(Pet, {key: "pet-1" }),
    React.createElement(Pet, {key: "pet-2" }),
    React.createElement(Pet, {key: "pet-3" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
