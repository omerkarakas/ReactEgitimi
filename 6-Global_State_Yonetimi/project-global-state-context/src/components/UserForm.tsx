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
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setName("")}>
        Temizle
      </button>
    </>
  );
};

export default UserForm;
