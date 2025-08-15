# 12. Custom Hook Geliştirme

## Özet

**Konular:** Kullanıcı tanımlı hook geliştirme  
**Dersin Konusu veya Ünite:** Custom Hook  
**Düzey:** Başlangıç / Orta  
**Amaç:** Fonksiyonaliteyi yeniden kullanılabilir bileşenlerde (hook) kullanmak  
**Ayrılan Süre:** 40dk

---

## Uygulama

React'te custom hook, birden fazla bileşende tekrar kullanılabilir hale getirmek istediğimiz `useState`, `useEffect` gibi hook temelli mantıkları tek bir yerde toplamaya yarar. Bu sayede kodumuz daha temiz, yeniden kullanılabilir ve test edilebilir hale gelir.

Daha önce Sayac bileşeninde geliştirdiğimiz işlevi useCounter adında bir custom hook haline getirelim:

### Klasik Sayaç Bileşeni (Hatırlatma)

```tsx
// components/CounterOld.tsx
import { useState } from "react";

export default function CounterOld() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="space-y-2">
      <h2>Sayac: {count}</h2>
      <div className="flex gap-2">
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
}
```

### İşlevi Custom Hook’a Taşıyalım

```tsx
// hooks/useCounter.ts
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
```

### Yeni Bileşende Kullanmak

```tsx
// components/Counter.tsx
import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div className="space-y-2">
      <h2>Sayac: {count}</h2>
      <div className="flex gap-2">
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
}
```

### Bir başka bileşende kullanım

```tsx
import { useCounter } from "../hooks/useCounter";

function AnotherCounter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Başka Sayaç: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default AnotherCounter;
```

---

## LocalStorage kullanımı ve Tema Toggle örneği

### Hook

```tsx
// src/hooks/useTheme.ts
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
```

### Kullanım

```tsx
// src/App.tsx
import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center transition-colors bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4 w-screen">Theme Toggle</h1>
      <button onClick={toggleTheme} className="px-6 py-2 rounded !bg-black !text-white dark:!bg-white dark:!text-black">
        Tema: {theme === "light" ? "Açık" : "Karanlık"}
      </button>
    </div>
  );
}

export default App;
```

---

## Özet

✔️ Bir fonksiyonaliteyi hook (kanca) altında topladık  
✔️ Bu hook’u farklı bileşenlerde kullandık
