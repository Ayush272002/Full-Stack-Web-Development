# Creating a Functional Component in React

There are two types of components in React:

## 1. Function Based

### Syntax:

```javascript
function Component() {
  // should start with a capital letter
  return <div>Component</div>;
}

export default Component;
```

- A simple function that returns JSX.
- The component name starts with a capital letter.

## 2. Class Based

### Syntax:

```javascript
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return <div>Component</div>;
  }
}

export default MyComponent;
```

- A class that extends `React.Component` (or `Component` after importing).
- Must include a `render` method that returns JSX.
- The class name starts with a capital letter.

# Running a React app

```shell
npm start
```