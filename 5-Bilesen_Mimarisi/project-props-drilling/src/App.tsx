import "./App.css";
import { Seviye1 } from "./components/PropsDrilling";

const App = () => {
  const isim = "Ömer";
  return (
    <>
      <Seviye1 isim={isim} />
    </>
  );
};

export default App;
