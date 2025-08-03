import { useState } from "react";

type Props = {
  ekle: (metin: string) => void;
};

const TodoInput = ({ ekle }: Props) => {
  const [metin, setMetin] = useState("");

  const gonder = () => {
    if (metin.trim() === "") return;
    ekle(metin);
    setMetin("");
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={metin}
        onChange={(e) => setMetin(e.target.value)}
        placeholder="Yeni görev girin"
        className="flex-1 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={gonder} className="px-4 py-2 rounded hover:border-x-blue-600">
        Ekle
      </button>
    </div>
  );
};

export default TodoInput;
