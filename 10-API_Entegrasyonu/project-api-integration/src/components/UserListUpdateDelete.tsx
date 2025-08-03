// components/UserListUpdateDelete.tsx
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserListUpdateDelete() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleUpdate = async () => {
    if (!selectedUser) return;

    const updatedUser = {
      ...selectedUser,
      name: editName,
      email: editEmail,
    };

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    const data = await res.json();

    setUsers(users.map((u) => (u.id === selectedUser.id ? { ...u, ...data } : u)));

    setSelectedUser(null);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-2">Kullanıcılar</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded flex justify-between">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(user)} className="text-blue-600 hover:underline">
                Düzenle
              </button>
              <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:underline">
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="font-bold mb-2">Kullanıcıyı Güncelle</h3>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full border p-2 mb-2 rounded"
            placeholder="İsim"
          />
          <input
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            className="w-full border p-2 mb-2 rounded"
            placeholder="E-posta"
          />
          <button onClick={handleUpdate} className="!bg-green-600 text-white px-4 py-2 rounded">
            Güncelle
          </button>
        </div>
      )}
    </div>
  );
}
