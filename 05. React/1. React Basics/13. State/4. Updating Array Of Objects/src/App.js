import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spiderman",
      ratings: 7,
    },
    {
      id: 2,
      title: "Man of Steel",
      ratings: 8,
    },
  ]);

  const handleClick = () => {
    setMovies(movies.map(m => m.id === 1 ? {...movies, title : "Jhon Wick 4" }: m))
  }

  return (
    <>
    {movies.map((movie) => (
      <li key = {Math.random()}>{movie.title}</li>
    ))}

    <button onClick = {handleClick}>Change Name</button>
    </>
  );
}

export default App;
