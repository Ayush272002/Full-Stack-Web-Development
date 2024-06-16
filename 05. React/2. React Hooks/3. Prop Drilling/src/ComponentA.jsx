import ComponentB from "./ComponentB";

const ComponentA = ({ name }) => {
  //console.log(name);
  return (
    <>
      <ComponentB name={name} />
    </>
  );
};

export default ComponentA;