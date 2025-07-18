import { useState } from "react";

const GirisFormu = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Giriş yapılıyor: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="E-posta adresiniz"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Gönder</button>
    </form>
  );
};

export default GirisFormu;
