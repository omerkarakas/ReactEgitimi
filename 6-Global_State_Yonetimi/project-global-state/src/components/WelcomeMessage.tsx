// src/components/WelcomeMessage.tsx
import { useUser } from "../contexts/UserContext";

const WelcomeMessage = () => {
  const { name } = useUser();

  if (!name) return null;

  return <h2 className="mt-4 text-md">Hoş geldin, {name}!</h2>;
};

export default WelcomeMessage;
