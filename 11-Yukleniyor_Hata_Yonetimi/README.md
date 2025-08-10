# 11. Yükleniyor ve Hata Gösterimi

## Özet

**Konular:**

- Loading ve Error durumlarının ele alınması

**Dersin Konusu veya Ünite:**

- Uygulama async çağrıları bekler veya ilk yüklenirken, ayrıca hata aldığında uygun bir görünüm sağlamak.

**Düzey:**

- Başlangıç / Orta

**Amaç:**

- Yükleme ve hata durumlarını arayüzde ele alarak sağlıklı bir kullanıcı arayüz deneyimi sunmak

**Ayrılan Süre:**

- 20dk

---

## Uygulama

Bu bölümdeki amacımız:

- Asenkron veri çekme sürecinde kullanıcıya yükleniyor durumunu göstermek
- Bir hata oluştuğunda kullanıcıyı bilgilendirmek
- Başarılı sonuçları listelemek

### Örnek Kod

```tsx
// src/components/UserList.tsx
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log("res:", res);

        if (!res.ok) {
          throw new Error("Sunucu hatası: " + res.status);
        }

        const data: User[] = await res.json();
        console.log("data:", data);
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Bilinmeyen bir hata oluştu.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Kullanıcı Listesi</h2>

      {loading && <p className="text-blue-600">Yükleniyor...</p>}
      {error && <p className="text-red-600">Hata: {error}</p>}

      {!loading && !error && users.length > 0 && (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="border p-2 rounded">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && users.length === 0 && <p>Hiç kullanıcı bulunamadı.</p>}
    </div>
  );
}
```

---

## Özet

Bu bölümde:

✔️ Asenkron veri çekerken **“yükleniyor”** durumunu gösterdik  
✔️ Bir hata oluştuğunda kullanıcıyı bilgilendirdik
