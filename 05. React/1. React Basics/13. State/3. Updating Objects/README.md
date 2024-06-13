# Updating Objects in React State

Managing state in React often involves working with objects. Here’s a guide on how to update objects in state using React's `useState` hook.

## Key Concepts

### Initializing State with an Object

When using `useState`, you can initialize the state with an object:
```jsx
const [movie, setMovie] = useState({
  title: "Harry Potter",
  ratings: 7,
});
```

### Updating Object Properties

To update properties of an object in state, use the spread operator to create a new object with the updated properties:
```jsx
const handleClick = () => {
  setMovie({...movie, ratings: 5});
};
```
This approach ensures that you do not mutate the original object but create a new object with the updated properties.

### Example Component

Here's how you can apply these concepts in a React component:
```jsx
function App() {
  const [movie, setMovie] = useState({
    title: "Harry Potter",
    ratings: 7,
  });

  const handleClick = () => {
    setMovie({...movie, ratings: 5});
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{movie.ratings}</h2>
      <button onClick={handleClick}>Change Ratings</button>
    </>
  );
}

export default App;
```

### React Documentation Notes

- **State Updates Are Merged**: When updating state, React shallowly merges the new state with the previous state. This means only the properties you specify will be updated.
- **Avoid Direct Mutations**: Always return a new object to ensure that React's state management can correctly identify changes and re-render components as needed.
- **Functional Updates**: For state updates that depend on the previous state, consider using a functional update to ensure you have the most recent state:
  ```jsx
  setMovie(prevMovie => ({ ...prevMovie, ratings: 5 }));
  ```

## Summary

- **Initialize State**: Use `useState` to initialize state with an object.
- **Update Properties**: Use the spread operator to create a new object with updated properties.
- **Avoid Mutations**: Always create new objects to avoid direct state mutations.
- **Functional Updates**: Use functional updates for state changes that depend on the previous state.