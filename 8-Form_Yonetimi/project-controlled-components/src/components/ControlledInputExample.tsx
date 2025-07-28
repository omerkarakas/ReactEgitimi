import { useState } from "react";

const ControlledInputExample = () => {
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Adınızı Girin:</h2>
      <input
        className="border px-3 py-2 rounded"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Adınız"
      />
      <p className="mt-2">
        Girilen İsim: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default ControlledInputExample;
