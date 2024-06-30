import { useReducer } from "react";

//state
//dispatch method : allow to change state data
//useReducer : 2 parameter contains custom state logic
//initial state : can be a simple value but generally will be containing an object
//not that much used

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default App;
