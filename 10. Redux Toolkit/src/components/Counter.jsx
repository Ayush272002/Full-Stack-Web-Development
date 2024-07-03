import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../app/features/counter/counterSlice";

const Counter = () => {
  //read the data from the redux store
  const count = useSelector((state) => state.counter.value);
  //changing the data by sending actions to the store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
