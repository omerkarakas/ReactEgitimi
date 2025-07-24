// src/App.tsx
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import UserForm from "./components/UserForm";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col gap-8 max-w-xl mx-auto mt-10 px-4 shadow-md rounded-xl p-6 border">
        <h1 className="text-xl font-bold ">Kimler gelmiş?</h1>
        <UserForm />
        <WelcomeMessage />
      </div>
    </UserProvider>
  );
}

export default App;
