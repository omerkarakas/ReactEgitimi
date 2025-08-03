import "./App.css";
import SimpleValidationForm from "./components/SimpleValidationForm";
import YupForm from "./components/YupForm";

function App() {
  return (
    <div className="flex flex-col h-screen items-stretch justify-around">
      {/* <SimpleValidationForm /> */}
      <YupForm />
    </div>
  );
}

export default App;
