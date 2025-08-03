// components/UserForm.tsx
import { useState } from "react";

export type User = {
  name: string;
  email: string;
};

// components/UserForm.tsx

export default function UserForm() {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
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
      <button type="submit" className="px-4 py-2 rounded">
        Gönder
      </button>
      {message && <p className="text-green-700">{message}</p>}
    </form>
  );
}
