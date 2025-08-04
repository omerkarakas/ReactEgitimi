# 4. Uygulamalı Mini Proje – Todo App

## Özet

"Yapılacak işler" uygulaması geliştirmek.

**Dersin Konusu veya Ünite:**

- Tam bir app geliştirilecek, bu uygulamada;
- Yapılacak görevleri ekleyebilecek
- Görevleri tamamlandı olarak işaretleyebilecek
- Görevleri silebilecek

**Düzey:** Başlangıç / Orta

**Amaç:** React'ta pratiklik kazanmak

**Ayrılan Süre:** 40dk

## Uygulama

### 1. types.ts

```typescript
export type Todo = {
  id: number;
  baslik: string;
  tamamlandi: boolean;
};
```

### 2. TodoInput.tsx

```tsx
import { useState } from "react";

type Props = {
  ekle: (metin: string) => void;
};

const TodoInput = ({ ekle }: Props) => {
  const [metin, setMetin] = useState("");

  const gonder = () => {
    if (metin.trim() === "") return;
    ekle(metin);
    setMetin("");
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={metin}
        onChange={(e) => setMetin(e.target.value)}
        placeholder="Yeni görev girin"
        className="flex-1 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-4 focus:ring-blue-500"
      />
      <button onClick={gonder} className="px-4 py-2 rounded hover:!bg-blue-600 !bg-blue-400">
        Ekle
      </button>
    </div>
  );
};

export default TodoInput;
```

### 3. TodoItem.tsx

```tsx
import type { Todo } from "../types";

type Props = {
  veri: Todo;
  tamamla: (id: number) => void;
  sil: (id: number) => void;
};

const TodoItem = ({ veri, tamamla, sil }: Props) => {
  return (
    <div className="flex justify-between items-center border p-3 rounded mb-2  shadow-sm">
      <span className={veri.tamamlandi ? "line-through text-gray-500" : ""}>{veri.baslik}</span>
      <div className="flex gap-2">
        <button onClick={() => tamamla(veri.id)} className="border px-3 py-1 rounded !bg-green-400">
          {veri.tamamlandi ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={() => sil(veri.id)} className=" px-3 py-1 rounded !bg-red-400">
          Sil
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
```

### 4. App.tsx

```tsx
import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./types";

function App() {
  const [liste, setListe] = useState<Todo[]>([]);

  const ekle = (baslik: string) => {
    const yeni: Todo = {
      id: Date.now(),
      baslik,
      tamamlandi: false,
    };
    setListe([yeni, ...liste]);
  };

  const tamamla = (id: number) => {
    setListe(liste.map((item) => (item.id === id ? { ...item, tamamlandi: !item.tamamlandi } : item)));
  };

  const sil = (id: number) => {
    setListe(liste.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 Yapılacaklar Listesi</h1>
      <TodoInput ekle={ekle} />
      <div className="mt-6">
        {liste.length === 0 ? (
          <p className="text-gray-500">Henüz görev yok.</p>
        ) : (
          liste.map((todo) => <TodoItem key={todo.id} veri={todo} tamamla={tamamla} sil={sil} />)
        )}
      </div>
    </div>
  );
}

export default App;
```

## Özet

Bu ünitede:

✔️ Bir yapılacaklar listesi (Todo App) uygulaması geliştirildi  
✔️ React bileşen yapısı modüler şekilde organize edildi (TodoInput, TodoItem, App)  
✔️ useState hook'u ile liste yönetimi, form verisi ve kullanıcı etkileşimi ele alındı  
✔️ props kullanılarak bileşenler arasında veri ve fonksiyon aktarıldı  
✔️ JSX ile listeleme (map), koşullu render (length === 0 ? ...) ve event handling (onClick) uygulandı  
✔️ UI bileşenleri sade HTML + TailwindCSS ile kodlandı  
✔️ Uygulama, sadece istemci tarafı (client-side) state yönetimiyle işlevsel hale getirildi
