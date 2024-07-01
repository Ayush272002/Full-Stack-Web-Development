# Context API in React

## Overview

The Context API in React allows you to share state across your entire application without having to pass props down manually through every level of the component tree. This is especially useful for global data like user authentication status, theme settings, and more.

## Steps to Use Context API

### 1. Import `createContext`
First, import `createContext` from React.
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
```

### 4. Consume Context Values
Use the `Consumer` component or the `useContext` hook to access the context values in your child components.

#### Using `Consumer` Component
```jsx
import { Data, Data1 } from "./App";

const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name) => (
        <Data1.Consumer>
          {(age) => (
            <h1>My name is {name} and I'm {age} years old</h1>
          )}
        </Data1.Consumer>
      )}
    </Data.Consumer>
  );
};
```

### Advantages of Context API

- **Avoid Prop Drilling**: Context API helps in avoiding the tedious task of passing props through multiple levels of components.
- **Global State Management**: Ideal for managing global states like themes, user authentication, etc.
- **Simplicity**: Less boilerplate compared to other state management libraries.

### Disadvantages of Context API

- **Complexity with Deep Nesting**: Using multiple contexts can lead to deeply nested `Consumer` components, which can make the code harder to read and maintain.
- **Performance Issues**: Frequent updates to context values can cause re-renders of all components that consume those values.

### Improved Approach: Using `useContext` Hook
The `useContext` hook simplifies context consumption without the need for nested `Consumer` components.

```jsx
import { useContext } from "react";
import { Data, Data1 } from "./App";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  return <h1>My name is {name} and I'm {age} years old</h1>;
};
```

### Summary

- **Context API**: Provides a way to pass data through the component tree without having to pass props manually at every level.
- **Usage Steps**: Import `createContext`, create context instances, use `Provider` to pass values, and consume values using `Consumer` or `useContext`.
- **Benefits**: Simplifies state management and avoids prop drilling.
- **Drawbacks**: Can lead to complex nested structures and performance issues with frequent updates.