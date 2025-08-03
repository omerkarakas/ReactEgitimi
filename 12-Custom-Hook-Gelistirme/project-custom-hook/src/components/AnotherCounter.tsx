import { useCounter } from "../hooks/useCounter";

export function AnotherCounter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Başka Sayaç: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
