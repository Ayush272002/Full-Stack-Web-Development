//1. import (create context)
import { createContext } from "react";
import ComponentC from "./ComponentC";

//2. createing instance of create Context
export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Ayush";
  //3. wrap our component into provider component (will come from create context)
  const age = 18;

  //4. not good too much nesting needed
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
