const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, props.name),
    React.createElement("h2", { key: 2 }, props.animal),
    React.createElement("h2", { key: 3 }, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "myId" }, [
    React.createElement("h1", { key: "title-adopt-me" }, "Adopt Me!"),
    React.createElement(Pet, {
      key: "pet-1",
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      key: "pet-2",
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      key: "pet-3",
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
