//without custom hook

// import { useState, useEffect } from "react";
// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((r) => r.json())
//       .then((d) => setData(d));
//   });

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// }

//with custom hook
import useCustomHook from "./useCustomHook";

function App() {
  const [data] = useCustomHook("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App;
