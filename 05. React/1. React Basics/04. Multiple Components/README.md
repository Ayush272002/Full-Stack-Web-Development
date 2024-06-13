# Using Multiple Components and Fragments in React

In React, building UIs involves creating and composing components. This guide explains how to create multiple components and use fragments to group them without adding extra nodes to the DOM.

## Creating Components

### Add Component (`add.js`)

The `Add` component is a simple functional component that returns a `div` element with some text.

```javascript
// add.js
const Add = () => {
  return (
    <div>
      Hello, I'm from Add Component
    </div>
  );
};

export default Add;
```

### Greetings Component (`greetings.jsx`)

Similarly, the `Greetings` component is another functional component that returns a `div` element with a different text.

```jsx
// greetings.jsx
const Greetings = () => {
  return (
    <div>
      Hello, I'm from Greetings component.
    </div>
  );
};

export default Greetings;
```

## Using Components in the Main Application (`app.js`)

In the main application component (`App`), we import and use the `Add` and `Greetings` components.

```javascript
// app.js
import Add from "./components/Add";
import Greetings from "./components/Greetings";

function App() {
  return (
    // <section>
    //   <Add />
    //   <Greetings />
    // </section>

    // Instead of wrapping in section we can do this
    // This is called fragments
    <>
      <Add />
      <Greetings />
    </>
  );
}

export default App;
```

### Using Fragments

When you need to return multiple elements from a component but don't want to add an extra wrapper element to the DOM, you can use fragments. Fragments allow you to group a list of children without adding extra nodes.

In the `App` component, instead of wrapping `Add` and `Greetings` inside a `section` or `div`, we use the fragment syntax `<>` and `</>` to group them:

```javascript
// Using Fragments
<>
  <Add />
  <Greetings />
</>
```

## Rendering the Application (`index.js`)

Finally, the `App` component is rendered to the DOM using ReactDOM.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
```

## Summary

- **Creating Components**: Components are the building blocks of a React application. We created two functional components, `Add` and `Greetings`, each returning a simple `div` with text.
- **Using Components**: Components are imported and used in the main `App` component.
- **Fragments**: Fragments allow you to group multiple elements without adding extra nodes to the DOM. This keeps the DOM clean and avoids unnecessary wrappers.

Using fragments is a common practice when you need to return multiple elements from a component and want to keep the rendered HTML structure simple.