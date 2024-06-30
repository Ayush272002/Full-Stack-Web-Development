const User = ({
  name = "N/A",
  hobbies = "N/A",
  location = "N/A",
  children,
}) => {
  return (
    <section>
      <h1>Name : {name}</h1>
      <h2>Hobbies : {hobbies}</h2>
      <h3>Location : {location}</h3>
      {children}
    </section>
  );
};

export default User;
