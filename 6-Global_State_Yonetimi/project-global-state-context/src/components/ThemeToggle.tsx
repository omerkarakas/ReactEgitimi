// src/components/ThemeToggle.tsx
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`px-4 py-2 border rounded mb-4 text-white`}>
      Tema: {theme === "light" ? "Açık" : "Koyu"}
    </button>
  );
};

export default ThemeToggle;
