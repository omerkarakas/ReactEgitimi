// src/App.tsx
import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen p-6 flex flex-col gap-y-8 justify-center items-center">
      <Counter />
      <AnotherComponent />
    </div>
  );
}

export default App;
