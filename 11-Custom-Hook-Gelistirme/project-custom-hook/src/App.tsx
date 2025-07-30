import "./App.css";
import CounterOld from "./components/CounterOld";
import Counter from "./components/Counter";
import { AnotherCounter } from "./components/AnotherCounter";

function App() {
  return (
    <div className="flex flex-col h-screen items-stretch justify-around">
      <CounterOld />
      <Counter />
      <AnotherCounter />
    </div>
  );
}

export default App;
