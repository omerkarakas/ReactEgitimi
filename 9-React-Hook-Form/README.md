# 9. React Hook Form ve Yup ile Doğrulama

## 📝 Özet

**Konular:**

- React Hook Form paketi ile form yönetimi
- Yup ile doğrulama

**Dersin Konusu veya Ünite:** React Hook Form ve Yup

**Düzey:** Başlangıç / Orta

**Amaç:** Form yönetiminde kolaylık

**Ayrılan Süre:** 40dk

---

## ⚙️ React Hook Form

React Hook Form (RHF), React’te form yönetimini daha kolay, performanslı ve az kodla yapmamıza olanak tanır.

### Avantajları:

- Form state'ini minimal kodla yönetir
- Performanslıdır (güncellemede minimum render olur)
- Dahili doğrulamasının yanında yup ve zod gibi doğrulama kütüphaneleri kolayca entegre edilebilir
- TypeScript desteği çok güçlüdür

---

## ✅ React Hook Form ile Dahili Doğrulama

### Kurulum

```
npm install react-hook-form
```

```tsx
// components/SimpleValidationForm.tsx
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};

export default function SimpleValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form verisi:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded">
      <div>
        <label>Kullanıcı Adı</label>
        <input
          {...register("username", {
            required: "Kullanıcı adı zorunlu",
            minLength: {
              value: 3,
              message: "En az 3 karakter girin",
            },
          })}
          className="border p-2 w-full"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email zorunlu",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Geçerli bir email girin",
            },
          })}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gönder
      </button>
    </form>
  );
}
```

---

## 🔐 React Hook Form + Yup ile Gelişmiş Doğrulama

### Kurulum

```
npm install react-hook-form @hookform/resolvers yup
```

```tsx
// components/YupForm.tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Ad zorunludur"),
    email: yup.string().email("Geçerli bir email adresi girin").required("Email zorunludur"),
  })
  .required();

type FormValues = {
  name: string;
  email: string;
};

export default function YupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form verisi:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded">
      <div>
        <label>Adınız</label>
        <input {...register("name")} className="border p-2 w-full" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} className="border p-2 w-full" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Gönder
      </button>
    </form>
  );
}
```

### Ekstra: Gelişmiş Yup Doğrulama Örneği

```ts
password: yup.string().min(8, "Şifre en az 8 karakter olmalı").matches(/[A-Z]/, "En az 1 büyük harf içermeli");
```

---

## 🔍 Özet

Bu bölümde:

- ✔️ Ekstra doğrulama kütüphanesi kullanmadan temel kontroller yapıldı
- ✔️ `register()` fonksiyonuna doğrudan doğrulama kuralları tanımlandı
- ✔️ Hata mesajları dinamik olarak gösterildi
- ✔️ Yup kütüphanesi ile form doğrulama şeması oluşturuldu
- ✔️ `yupResolver` ile React Hook Form’a entegre edildi
- ✔️ Giriş alanlarında geçerlilik kontrolü ve kullanıcıya hata mesajı gösterimi yapıldı
- ✔️ Kod tekrarı azaltıldı, doğrulama mantığı bileşen dışına (doğrulama şemasına) çıkarıldı
