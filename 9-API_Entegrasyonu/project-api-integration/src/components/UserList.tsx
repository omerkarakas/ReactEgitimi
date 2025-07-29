// components/UserList.tsx
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hata:", err);
        setLoading(false);
      });
  }, []);

  //   if (loading) return <p>Yükleniyor...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Kullanıcılar (fetch)</h2>
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
