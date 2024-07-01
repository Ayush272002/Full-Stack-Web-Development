# Understanding `useEffect` in React

The `useEffect` hook is a powerful tool for managing side effects in functional components. Side effects include data fetching, subscriptions, and manually changing the DOM in React components.

## Key Concepts

### Basic Usage

The `useEffect` hook takes two arguments:
1. **A function**: This function contains the code that performs the side effect.
2. **A dependency array**: This array lists the dependencies that the effect depends on.

```jsx
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Hello");
    document.title = `Increment ${value}`;
  }, []); // Empty array means this effect runs only on initial render

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
}

export default App;
```

### Dependency List

- **Empty Dependency Array `[]`**: The effect runs only once when the component mounts.
- **No Dependency Array**: The effect runs after every render.
- **With Dependencies**: The effect runs only when any value in the dependency array changes.

### Example: Fetching Data

```jsx
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []); // Empty array means this effect runs only on initial render

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
```

### Significance of Dependency List

1. **Empty Dependency Array (`[]`)**: 
   - Effect runs only once when the component mounts.
   - Useful for initializing data or setting up subscriptions.
   
   ```jsx
   useEffect(() => {
     // Runs only once
   }, []);
   ```

2. **No Dependency Array**:
   - Effect runs after every render.
   - Useful for logging or other operations that should happen after every render.
   
   ```jsx
   useEffect(() => {
     // Runs after every render
   });
   ```

3. **Specific Dependencies**:
   - Effect runs when any value in the dependency array changes.
   - Useful for operations that depend on specific state or prop changes.
   
   ```jsx
   useEffect(() => {
     // Runs when `value` changes
   }, [value]);
   ```

## Summary

- **`useEffect` Hook**: Manages side effects in functional components.
- **Basic Usage**: Takes a function and a dependency array.
- **Dependency List**:
  - Empty: Runs once on mount.
  - No array: Runs after every render.
  - Specific dependencies: Runs when dependencies change.
- **Common Use Cases**: Data fetching, DOM manipulation, setting up subscriptions.