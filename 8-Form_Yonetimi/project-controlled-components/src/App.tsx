import "./App.css";
import ContactForm from "./components/ContactForm";
import ControlledInputExample from "./components/ControlledInputExample";

function App() {
  return (
    <div className="flex flex-col h-screen items-stretch justify-around">
      <ControlledInputExample />

      <ContactForm />
    </div>
  );
}

export default App;
