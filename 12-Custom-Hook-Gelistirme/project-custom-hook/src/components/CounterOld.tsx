// components/Counter.tsx
import { useState } from "react";

const CounterOld = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="space-y-2">
      <h2>Sayac: {count}</h2>
      <div className="flex gap-2">
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
};

export default CounterOld;
