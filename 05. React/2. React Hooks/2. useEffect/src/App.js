import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  //when the component render for the first time itll render all the code which is
  //inside the useEffect
  //anytime we do side effect - fetching a data from somewhere else or updating DOM
  //dependency list
  useEffect(() => {
    console.log("Hello");
    document.title = `Increment ${value}`;
  }, []); //[] mean itll run only initial render

  //2nd example
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;