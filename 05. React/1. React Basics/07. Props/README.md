# Understanding Props in React

Props (short for "properties") are a fundamental concept in React that allow components to communicate with each other. Props enable parent components to pass data and functions down to their child components, making it possible to create dynamic and reusable components.

## Key Concepts

### Passing Props

Props are passed to components like attributes in HTML. You can pass any JavaScript value through props, including strings, numbers, objects, arrays, and functions.

```jsx
<User name="Ayush Acharjya" age={90} hobbies={["Coding", "Reading", "Sleeping"]} />
```

### Accessing Props

In the child component, props can be accessed via the `props` parameter. Props are used within JSX by referencing `props.propertyName`.

```jsx
const User = (props) => {
  return (
    <section>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </section>
  );
};
```

### Default Props

Default props can be defined using the `defaultProps` property. However, it's recommended to use JavaScript default parameters instead for function components, as support for `defaultProps` will be removed in a future major release of React.

#### Using `defaultProps`

```jsx
User.defaultProps = {
  name: "abc",
  age: 100,
  hobbies: ["N/A"],
};
```

#### Using Default Parameters

```jsx
const User = ({ name = "abc", age = 100, hobbies = ["N/A"] }) => {
  return (
    <section>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h4>Hobbies: {hobbies.join(", ")}</h4>
    </section>
  );
};
```

## Example Code

### `App.js`

```jsx
const App = () => {
  return (
    <>
      <User name="Ayush Acharjya" age={90} hobbies={["Coding", "Reading", "Sleeping"]} />
      <Computer />
    </>
  );
};
```

## Summary

- **Props**: Allow data to be passed from parent to child components.
- **Accessing Props**: Use the `props` parameter within the child component.
- **Default Props**: Set default values for props using JavaScript default parameters for function components.
- **Usage**: Props make components more dynamic and reusable by allowing them to receive data and functions from their parent components.

### Note

- **Deprecated `defaultProps`**: The use of `defaultProps` in function components is being deprecated. Use JavaScript default parameters instead to set default values for props.