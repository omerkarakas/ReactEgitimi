// src/components/UserForm.tsx
import { useUser } from "../contexts/UserContext";

const UserForm = () => {
  const { name, setName } = useUser();

  return (
    <>
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Adınızı yazın..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="px-4 py-2 rounded text-black" onClick={() => setName("")}>
        Temizle
      </button>
    </>
  );
};

export default UserForm;
