import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Selam!</h1>

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button onClick={() => console.log("Merhaba Shad")}>Merhaba Shad</Button>
      </div>
    </>
  );
}

export default App;
