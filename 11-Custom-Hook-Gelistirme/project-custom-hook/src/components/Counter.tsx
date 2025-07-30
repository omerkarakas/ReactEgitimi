import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(5);

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
}
