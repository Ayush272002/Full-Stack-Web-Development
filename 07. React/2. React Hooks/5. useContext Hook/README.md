# Using `useContext` Hook in React

## Overview

The `useContext` hook in React is a simpler and more readable way to access context values in functional components. It eliminates the need for nested `Consumer` components, making the code cleaner and easier to understand.

## Steps to Use `useContext` Hook

### 1. Import `createContext`
First, import `createContext` from React to create the context.
```jsx
import { createContext } from "react";
```

### 2. Create Context Instances
Create instances of the context using `createContext`.
```jsx
export const Data = createContext();
export const Data1 = createContext();
```

### 3. Provide Context Values
Wrap your components with the `Provider` components provided by the context instances. This is where you specify the values that will be accessible by the consumer components.
```jsx
function App() {
  const name = "Ayush";
  const age = 18;

  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <ComponentC />
      </Data1.Provider>
    </Data.Provider>
  );
}

export default App;
```

### 4. Consume Context Values Using `useContext`
In your child components, use the `useContext` hook to access the context values. This avoids the complexity of nested `Consumer` components.
```jsx
import { useContext } from "react";
import { Data, Data1 } from "./App";

const ComponentC = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <h1>
        My name is {userName} and I'm {age} years old
      </h1>
    </>
  );
};

export default ComponentC;
```

### Benefits of Using `useContext`

- **Simplicity**: The `useContext` hook simplifies the consumption of context values by removing the need for nested `Consumer` components.
- **Readability**: The code becomes more readable and easier to maintain.
- **Efficiency**: It reduces the boilerplate code associated with the Context API.

### Summary

- **Context API**: Provides a way to share values between components without explicitly passing props through every level of the component tree.
- **`useContext` Hook**: A React hook that simplifies accessing context values in functional components.
- **Usage**: Create context with `createContext`, provide values using `Provider`, and consume values using `useContext`.
- **Advantages**: Simplifies context consumption, enhances code readability, and reduces boilerplate code.