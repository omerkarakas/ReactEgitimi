// src/components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../store/store";
import { increment, decrement } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded w-60 text-center">
      <h2 className="text-xl mb-2">Sayaç</h2>
      <p className="text-2xl mb-4">{count}</p>
      <div className="flex justify-center gap-2">
        <button onClick={() => dispatch(decrement())} className="px-3 py-1 border rounded">
          -
        </button>
        <button onClick={() => dispatch(increment())} className="px-3 py-1 border rounded">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
