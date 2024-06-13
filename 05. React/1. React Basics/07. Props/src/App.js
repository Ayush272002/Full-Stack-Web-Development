// React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

const User = (props) => {
  return (
    <section>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h4>Hobbies: {props.hobbies} </h4>
    </section>
  );
};

const Computer = (x) => {
  return (
    <>
      <h1>Name : {x.name}</h1>
      <h2>Price : {x.price}</h2>
    </>
  );
};

User.defaultProps = {
  name: "abc",
  age: 100,
  hobbies: "N/A",
};

Computer.defaultProps = {
  name: "N/A",
  price: "N/A",
};

const App = () => {
  return (
    <>
      <User
        name="Ayush Acharjya"
        age={90}
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
      <Computer />
    </>
  );
};

export default App;
