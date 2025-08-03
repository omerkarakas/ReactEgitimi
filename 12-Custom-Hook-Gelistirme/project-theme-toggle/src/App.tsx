import "./App.css";

import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center justify-center transition-colors bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4 w-screen">Theme Toggle</h1>
      <button onClick={toggleTheme} className="px-6 py-2 rounded !bg-black !text-white dark:!bg-white dark:!text-black">
        Tema: {theme === "light" ? "Açık" : "Karanlık"}
      </button>
    </div>
  );
}

export default App;
