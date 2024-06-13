import { useState } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <ComponentOne count = {count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count = {count} onClickHandler={() => setCount(count + 1)} />
    </section>
  );
}

export default App;
