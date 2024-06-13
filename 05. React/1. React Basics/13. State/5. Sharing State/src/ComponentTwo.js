import React from 'react'

const ComponentTwo = ({count, onClickHandler}) => {
    //const handleClick = () => onClickHandler();

  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>Increment</button>
    </div>
  )
}

export default ComponentTwo
