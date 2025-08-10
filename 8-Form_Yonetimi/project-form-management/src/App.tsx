import "./App.css";
import ContactFormControlled from "./components/ContactFormControlled";
import ContactFormUncontrolled from "./components/ContactFormUnControlled";
import ControlledInputExample from "./components/ControlledInputExample";

function App() {
  return (
    <div className="flex flex-col h-screen items-stretch justify-around">
      <ControlledInputExample />
      <ContactFormControlled />
      <ContactFormUncontrolled />
    </div>
  );
}

export default App;
