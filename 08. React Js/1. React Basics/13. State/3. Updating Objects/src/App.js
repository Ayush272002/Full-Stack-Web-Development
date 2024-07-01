import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({
    title: "Harry Potter",
    ratings: 7,
  })

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // }

    // setMovie(copyMovie);

    setMovie({...movie, ratings: 5});
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{movie.ratings}</h2>
      <button onClick = {handleClick}>Change Ratings</button>
    </>
  );
}

export default App;
