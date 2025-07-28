import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gönderilen Form: ${JSON.stringify(form, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md">
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        name="name"
        placeholder="Adınız"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="email"
        name="email"
        placeholder="E-posta"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        className="w-full border px-3 py-2 rounded"
        name="message"
        placeholder="Mesajınız"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;
