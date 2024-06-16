import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  //console.log(name)
  return (
    <>
      <ComponentC name={name} />
    </>
  );
};

export default ComponentB;