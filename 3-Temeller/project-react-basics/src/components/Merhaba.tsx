import { useEffect, useState } from "react";
const Merhaba = () => {
  const [mesaj, setMesaj] = useState("");

  useEffect(() => {
    setMesaj("Hoş geldin! Uygulamaya giriş yaptın.");
    console.log("Component loaded");
  }, []);

  return <p className="text-lg">{mesaj}</p>;
};

export default Merhaba;
