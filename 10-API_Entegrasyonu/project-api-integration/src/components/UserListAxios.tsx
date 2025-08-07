// components/UserListAxios.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserListAxios() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<User[]>(`${API_URL}/users`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hata:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Kullanıcılar (axios)</h2>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <ul className="space-y-2 p-4">
          {users.map((user) => (
            <li key={user.id} className="border p-2 rounded">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
