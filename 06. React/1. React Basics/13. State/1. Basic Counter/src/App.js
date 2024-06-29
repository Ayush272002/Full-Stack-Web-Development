import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => setCount(count-1);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick = {decrement}>-</button>
    </>
  );
};

const User = () => {
  const [username, setUsername] = useState("unknown");
  const changeName = () => {
    setUsername("Ayush");
  }

  return(
    <>
      <h1>{username}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}

function App() {
  return <>
    <Counter />
    <User />
  </>;
}

export default App;
