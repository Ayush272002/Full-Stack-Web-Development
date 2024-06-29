import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(["Alex", "Jhon"])

  const addOne = () => {
    setFriends([...friends, "Ayush"])
  }

  const removeOne = () => {
    setFriends(friends.filter((f) => f !== "Jhon"));
  }

  const updateOne = () => {
    setFriends(friends.map((f) => f === "Ayush" ? "Ayush Acharjya" : f));
  }

  return (
    <>
      {friends.map((f) => (
        <li key = {Math.random()}>{f}</li>
      ))}

      <button onClick = {addOne}>Add One</button>
      <button onClick = {removeOne}>Remove One</button>
      <button onClick = {updateOne}>Update One</button>
    </>
  );
}

export default App;
