import "./style.css";
import Button from "react-bootstrap/Button";

function Buttons() {
  return (
    <>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </>
  );
}

function App() {
  const differentStyles = {
    color: "white",
    backgroundColor: "crimson",
    padding: "10px",
  };

  return (
    <>
      {/* inline style */}
      <h1 style={{ color: "blue", backgroundColor: "green" }}>Hello World</h1>

      <h2
        style={{
          color: differentStyles.color,
          backgroundColor: differentStyles.backgroundColor,
          padding: differentStyles.padding,
        }}
      >
        Hello im Ayush
      </h2>

      {/* from style.css */}
      <h3>From style.css</h3>

      {/* from bootstrap */}
      <Buttons />

      {/* using tailwind css */}
      <h1 className="text-3xl font-bold underline text-orange-800">Hello world!</h1>
    </>
  );
}

export default App;
