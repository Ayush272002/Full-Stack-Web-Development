# Updating Arrays of Objects in React State

When working with arrays of objects in React state, updating a specific object within the array requires creating a new array with the updated object while preserving the immutability of the state.

## Key Concepts

### Initializing State with an Array of Objects

You can use `useState` to initialize state with an array of objects:
```jsx
const [movies, setMovies] = useState([
  { id: 1, title: "Spiderman", ratings: 7 },
  { id: 2, title: "Man of Steel", ratings: 8 },
]);
```

### Updating an Object in an Array

To update a specific object in an array, use the `map` method to create a new array where the object to be updated is replaced with a new object:
```jsx
const handleClick = () => {
  setMovies(movies.map(movie => 
    movie.id === 1 ? { ...movie, title: "John Wick 4" } : movie
  ));
};
```
This ensures that the array is not directly mutated and a new array is created with the updated object.

### Example Component

Here’s how you can apply these concepts in a React component:
```jsx
function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 7 },
    { id: 2, title: "Man of Steel", ratings: 8 },
  ]);

  const handleClick = () => {
    setMovies(movies.map(movie => 
      movie.id === 1 ? { ...movie, title: "John Wick 4" } : movie
    ));
  };

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default App;
```

### React Documentation Notes

- **State Updates Are Merged**: React merges the new state with the previous state when updating. This allows you to update only the properties that need to change.
- **Avoid Direct Mutations**: Always create new arrays/objects to ensure that React's state management can correctly identify changes and re-render components as needed.
- **Immutability**: Keeping state immutable helps in maintaining predictable behavior and debugging.

## Summary

- **Initialize State**: Use `useState` to initialize state with an array of objects.
- **Update Objects in Arrays**: Use the `map` method to create a new array with the updated object.
- **Avoid Mutations**: Always create new arrays/objects to avoid direct state mutations.
- **Example Usage**: Apply these concepts to create interactive and dynamic components.