# React ile API Entegrasyonu

## Özet

**Konular:**

- Fetch / Axios.get
- POST, PUT ve DELETE örnekleri

**Dersin Konusu veya Ünite:** API ile entegrasyon  
**Düzey:** Başlangıç / Orta  
**Amaç:** API servisleri ile entegrasyonu öğrenmek  
**Süre:** 40dk

## Uygulama Bilgisi

API entegrasyonu, uygulamanın dış veri kaynaklarına (örneğin bir backend servis, bir REST API veya JSON verisi sunan üçüncü taraf bir servis) bağlanmasıdır.

React'te API çağrıları genellikle:

- `useEffect` içinde yapılır (component mount olduğunda veri çekmek için)
- `useState` ile veri saklanır
- `fetch` veya `axios` gibi araçlar kullanılır

---

## Basit API Çağrısı Örneği (fetch ile)

```tsx
// constants.ts
export const API_URL = "https://jsonplaceholder.typicode.com";
```

```tsx
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
    fetch(`${API_URL}/users`)
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
```

## Axios ile (Aynı Örnek)

```bash
npm i axios
```

```tsx
// components/UserListAxios.tsx
import axios from "axios";
import { useEffect, useState } from "react";

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
```

---

## API'ye Veri Gönderme (POST)

> JSONPlaceholder sahte bir API’dir, POST verinizi gerçekten kaydetmez.

```tsx
// components/UserForm.tsx
import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function UserForm() {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const createdUser: User = await response.json();
      setMessage(`Kullanıcı eklendi: ${createdUser.name}`);
      setUser({ name: "", email: "" });
    } else {
      setMessage("Bir hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Yeni Kullanıcı Ekle</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="İsim"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="E-posta"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gönder
      </button>
      {message && <p className="text-green-700">{message}</p>}
    </form>
  );
}
```

---

## Kullanıcı Güncelleme (PUT) ve Silme (DELETE)

```tsx
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
    fetch(`${API_URL}/users?_limit=5`)
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/users/${id}`, {
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

    const res = await fetch(`${API_URL}/users/${selectedUser.id}`, {
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
          <button onClick={handleUpdate} className="bg-green-600 text-white px-4 py-2 rounded">
            Güncelle
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## Özet

- `useEffect` ile veri çekme
- `useState` ile veri ve loading yönetimi
- `fetch` ve `axios` ile GET isteği
- TypeScript ile veri tipi tanımlama
- Hata yakalama (`catch`)
- Form inputlarını `useState` ile kontrol etme
- POST, PUT, DELETE istekleri ile API entegrasyonu
- JSON.stringify ile veri gönderme
- CRUD işlemleri uygulaması
