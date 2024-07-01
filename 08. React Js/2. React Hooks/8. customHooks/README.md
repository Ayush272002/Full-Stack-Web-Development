# Custom Hooks in React

Custom hooks are a powerful feature in React that allow you to encapsulate reusable logic within a function. This can make your code more modular, maintainable, and reusable. Custom hooks leverage the power of React's existing hooks to create new, reusable pieces of functionality.

## What is a Custom Hook?

A custom hook is a JavaScript function whose name starts with `use` and that may call other hooks. Custom hooks allow you to extract component logic into reusable functions. This is particularly useful for abstracting away logic for data fetching, form handling, subscriptions, and more.

## Why Use Custom Hooks?

- **Reusability**: Encapsulate logic that can be reused across different components.
- **Separation of Concerns**: Keep components clean and focused on rendering, while logic is handled separately.
- **Cleaner Code**: Reduce code duplication and improve readability.

## Example: Data Fetching with Custom Hook

### Without Custom Hook

```jsx
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
```

### With Custom Hook

#### Custom Hook File: `useCustomHook.js`

```jsx
import { useState, useEffect } from "react";

const useCustomHook = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useCustomHook;
```

#### Usage in Component: `App.js`

```jsx
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
```

### Explanation:

- **Creating the Custom Hook**: 
  - The `useCustomHook` function encapsulates the data fetching logic.
  - It takes a URL as a parameter and uses `useState` to manage the fetched data.
  - The `useEffect` hook fetches the data when the URL changes and updates the state.
  - The hook returns the fetched data.

- **Using the Custom Hook**:
  - In `App.js`, the custom hook is imported and used as `useCustomHook("https://jsonplaceholder.typicode.com/todos")`.
  - The returned data is mapped and rendered as paragraphs.

## Rules for Creating Custom Hooks

1. **Naming**: Custom hooks must start with the word "use". This convention is enforced by React to ensure hooks are properly identified and used.
   - Example: `useCustomHook`, `useFetch`, `useForm`.

2. **Calling Other Hooks**: Custom hooks can call other hooks (e.g., `useState`, `useEffect`). This allows you to encapsulate complex logic.

3. **Returning Values**: Custom hooks can return any type of value (object, array, primitive). This flexibility allows for diverse use cases.
   - Example: Returning state and updater functions from a form handling hook.

4. **Dependency Arrays**: When using `useEffect` or similar hooks inside a custom hook, manage dependencies carefully to ensure proper reactivity.

## Best Practices

- **Abstraction**: Ensure the hook abstracts logic in a way that it can be easily reused across different parts of your application.
- **Documentation**: Document the custom hook's purpose, parameters, and return values for better maintainability.
- **Separation**: Keep custom hooks in separate files for better modularity and organization.
- **Testing**: Test custom hooks thoroughly to ensure they handle edge cases and behave as expected.

## Advanced Usage

### Combining Multiple Hooks

Custom hooks can combine multiple hooks to create more complex functionality. For example, a hook that handles both data fetching and form submission.

### Example: Combining Hooks

```jsx
import { useState, useEffect } from "react";

const useCombinedHook = (url, formSubmitCallback) => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formSubmitCallback(formData);
  };

  return { data, formData, setFormData, handleFormSubmit };
};

export default useCombinedHook;
```

### Usage in Component

```jsx
import useCombinedHook from "./useCombinedHook";

function App() {
  const { data, formData, setFormData, handleFormSubmit } = useCombinedHook(
    "https://jsonplaceholder.typicode.com/todos",
    (submittedData) => console.log(submittedData)
  );

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App;
```

### Summary

Custom hooks in React are a robust way to encapsulate reusable logic and maintain clean, readable, and maintainable code. They follow specific rules and best practices to ensure they integrate seamlessly with React's functional programming paradigm. By leveraging custom hooks, developers can create more modular and efficient applications.