import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You typed ${userName}`);
    setUserName("");
  };

  return (
    <>
      <h1>Form demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
