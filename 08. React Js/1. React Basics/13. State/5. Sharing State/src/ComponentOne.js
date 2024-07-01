import React from "react";

const ComponentOne = ({ count, onClickHandler }) => {
    const handleClick = () => onClickHandler();

  return (
    <section>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
    </section>
  );
};

export default ComponentOne;