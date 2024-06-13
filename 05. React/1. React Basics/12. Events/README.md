# Handling Events in React

Handling events in React is similar to handling events in regular HTML, but with some syntactic and functional differences. React events are named using camelCase, and you pass a function as the event handler rather than a string.

## Key Concepts

### Event Handling Syntax

In HTML, you might define an event handler like this:
```html
<button onclick="handleClick()">Click me</button>
```

In React, it looks like this:
```jsx
<button onClick={handleClick}>Click me</button>
```

### Example 1: Handling Click Events

#### Simple Click Event

```jsx
const Button = () => {
  const handleClick = () => {
    alert("clicked");
  };

  return <button onClick={handleClick}>Click</button>;
};
```

In this example, the `handleClick` function is called when the button is clicked.

#### Passing Arguments to Event Handlers

```jsx
const Button2 = () => {
  const handleClick = (a, b) => {
    alert(`sum : ${a + b}`);
  };

  // This would execute immediately on render, which is not desired:
  // return <button onClick={handleClick(2,2)}>sum</button>

  // Correct way to pass arguments:
  return <button onClick={() => handleClick(2, 2)}>sum</button>;
};
```

When you need to pass arguments to the event handler, wrap the function call in an anonymous function to prevent it from executing immediately.

### Example 2: Handling Other Events

#### Copy Event

```jsx
const Copy = () => {
  const copyHandler = () => {
    alert("Stop copying and do on your own");
  };

  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ex illo?
        Earum cumque ullam illo molestias quam doloremque? Praesentium, error?
      </p>
    </>
  );
};
```

In this example, the `copyHandler` function is called when the text within the `<p>` element is copied.

## Additional Details

### Event Object

React events are synthetic events, which are a wrapper around the browser’s native event system. Synthetic events have the same interface as native events but work identically across all browsers.

```jsx
const handleClick = (event) => {
  console.log(event.type); // 'click'
};
```

### Preventing Default Behavior

You can prevent the default behavior of an event using `event.preventDefault()`.

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  alert('Form submitted');
};

return <form onSubmit={handleSubmit}><button type="submit">Submit</button></form>;
```

### Event Pooling

For performance reasons, React pools the SyntheticEvent objects, which means the event object will be reused and all properties will be nullified. If you need to use the event object asynchronously, you should call `event.persist()`.

```jsx
const handleClick = (event) => {
  event.persist();
  setTimeout(() => {
    console.log(event.type); // 'click'
  }, 1000);
};
```

## Example Usage in `App` Component

```jsx
function App() {
  return (
    <>
      <Button />
      <Button2 />
      <Copy />
    </>
  );
}

export default App;
```

## Summary

- **Event Naming**: Use camelCase for event names in React.
- **Passing Event Handlers**: Pass a function as the event handler rather than a string.
- **Synthetic Events**: React normalizes events to work identically across all browsers.
- **Event Object**: Can be accessed in event handlers and contains information about the event.
- **Preventing Default Behavior**: Use `event.preventDefault()` to prevent default actions.
- **Event Pooling**: Be aware of event pooling in React for performance reasons.