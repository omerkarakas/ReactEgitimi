# 8. Form Yönetimi

## 📌 Özet

**Konular:**

- Kontrollü Form Yönetimi
- Kontrolsüz Form Yönetimi

**Dersin Konusu veya Ünite:**  
Form yönetimi

**Düzey:** Başlangıç / Orta

**Amaç:**  
Form inputlarının nasıl handle edileceğini öğrenmek.

**Ayrılan Süre:** 40dk

---

## 1️⃣ Controlled vs Uncontrolled Components

- **Controlled:** Form verisi React state’inde tutulur.
- **Uncontrolled:** Form verisi DOM'da tutulur, React tarafından kontrol edilmez.

React’te genellikle **kontrollü(controlled) bileşenler** tercih edilir çünkü bileşen durumu daha kolay yönetilir ve izlenebilir olur.

---

## 2️⃣ Basit Bir Controlled Input Örneği

```tsx
// src/components/ControlledInputExample.tsx
import { useState } from "react";

const ControlledInputExample = () => {
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">🧍 Adınızı Girin:</h2>
      <input
        className="border px-3 py-2 rounded"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Adınız"
      />
      <p className="mt-2">
        Girilen İsim: <strong>{name}</strong>
      </p>
    </div>
  );
};
export default ControlledInputExample;
```

**Burada:**

- `value={name}` ile input’un değeri state’e bağlandı.
- `onChange` ile her tuşa basıldığında state güncelleniyor.

## 3️⃣ Çok Alanlı Bir Form ve Submit İşlemi

```tsx
// src/components/ContactForm.tsx
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
```

**Not:** Form elemanlarının `name` özelliği, `handleChange` fonksiyonunda hangi alanın güncellendiğini dinamik olarak belirler.

---

## 4️⃣ Kontrolsüz Form Yönetimi

```tsx
// src/components/ContactFormUncontrolled.tsx
export default function ContactFormUncontrolled() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({
      name,
      email,
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-stretch space-y-2 p-4 max-w-md">
      <label htmlFor="name" className="self-start">
        Adınız:
      </label>
      <input type="text" id="name" name="name" className="border px-3 py-2 rounded mb-6" />

      <label htmlFor="email" className="self-start">
        E-posta:
      </label>
      <input type="email" id="email" name="email" className="border px-3 py-2 rounded mb-6" />

      <label htmlFor="message" className="self-start">
        Mesajınız:
      </label>
      <textarea id="message" name="message" className="border px-3 py-2 rounded mb-6" />

      <button type="submit">Gönder</button>
    </form>
  );
}
```

---

## ✅ Özet

Bu bölümde şunları öğrendik:

- ✔️ Controlled component ile input verisi nasıl yönetilir
- ✔️ Çok alanlı bir form yapısı nasıl kurulur
- ✔️ Form gönderimi nasıl yakalanır (`onSubmit`)
- ✔️ `useState` ile form state’i nasıl tutulur
- ✔️ Uncontrolled form nasıl ele alınır
