const Button = () => {
  const handleClick = () => {
    alert("clicked");
  };

  return <button onClick={handleClick}>Click</button>;
};

const Button2 = () => {
  const handleClick = (a, b) => {
    alert(`sum : ${a + b}`);
  };
  //if we do like this it will get executed without being clicked
  //button will be called without being rendered
  // return <button onClick={handleClick(2,2)}>sum</button>

  //fix for that
  return <button onClick={() => handleClick(2, 2)}>sum</button>;
};

const Copy = () => {
  const copyHandler = () => {
    alert("Stop copying and do on your own");
  }

  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ex illo?
        Earum cumque ullam illo molestias quam doloremque? Praesentium, error?
      </p>
    </>
  );
};

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
