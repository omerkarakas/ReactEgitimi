// src/contexts/UserContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

type UserContextType = {
  name: string;
  setName: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");

  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;
};

// Hook ile daha kolay erişim
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser UserProvider içinde kullanılmalı");
  }
  return context;
};
