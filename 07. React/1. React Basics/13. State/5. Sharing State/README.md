# Sharing State in React

In React, sharing state between components often involves lifting the state up to a common ancestor component. This allows multiple child components to access and modify the shared state through props.

## Key Concepts

### Lifting State Up

When multiple components need to reflect the same changing data, it's recommended to lift the state up to their closest common ancestor. This ancestor component will maintain the state and pass it down as props.

### Example

Here's an example demonstrating how to share state between two components by lifting the state up to the parent component:

#### Parent Component (`App.js`)

```jsx
import { useState } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </section>
  );
}

export default App;
```

#### Child Components

- **ComponentOne.js**
```jsx
import React from "react";

const ComponentOne = ({ count, onClickHandler }) => {
  return (
    <section>
      <p>{count}</p>
      <button onClick={onClickHandler}>Increment</button>
    </section>
  );
};

export default ComponentOne;
```

- **ComponentTwo.js**
```jsx
import React from "react";

const ComponentTwo = ({ count, onClickHandler }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>Increment</button>
    </div>
  );
};

export default ComponentTwo;
```

### Explanation

- **State Management in Parent**: The parent component (`App`) holds the state (`count`) and provides a function to update this state (`setCount`).
- **Props**: The parent passes the state and the state-updating function down to the child components as props.
- **Event Handling**: The child components use the provided function to update the shared state when a button is clicked.

### React Documentation Notes

- **Single Source of Truth**: Lifting state up ensures there is a single source of truth. The state is centralized in one place, making the data flow more predictable and easier to debug.
- **Prop Drilling**: While lifting state up can be useful, excessive prop drilling (passing props through many levels) can make the code harder to manage. For deeply nested components, consider using state management libraries like Redux or Context API.

## Summary

- **Lifting State Up**: Centralize the state in a common ancestor component to share it between child components.
- **Props**: Use props to pass the state and the state-updating function from the parent to the children.
- **Event Handling**: Child components call the state-updating function to modify the shared state.