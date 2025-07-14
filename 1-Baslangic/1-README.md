# 🚀 React Projesine Başlangıç (Kurulum ve Altyapı Hazırlığı)

## 📌 Özet

### 🎯 Konular:

- Geliştirme altyapısının kurulması
- Proje oluşturma

### 📚 Dersin Konusu / Ünite:

- Kurulumlar ve yeni proje başlatma
- Düzey: Başlangıç / Orta
- Amaç: Geliştirme altyapısının hazırlanması
- Ayrılan Süre: ⏱️ 40 dk

---

## 🛠️ Uygulama Adımları

### ✅ Gerekli Kurulumlar

- [Node.js](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com)

---

### ⚙️ Proje Oluşturma ve Çalıştırma

```bash
npm create vite@7.0.2
# project name: "project-name"
# Select a framework: react
# Select a variant: TypeScript

cd "project-name"
code .
npm install
npm run dev
```

---

## 🎨 TailwindCSS Kurulumu ve Ayarları

👉 [Resmi Dokümantasyon](https://tailwindcss.com/docs/installation/using-vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

### ✅ `vite.config.ts` dosyasını düzenle:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### ✅ CSS dosyasına ekle:

```css
@import "tailwindcss";
```

### ✅ Artık Tailwind sınıflarını kullanabilirsin:

```jsx
<h1 className="text-3xl font-bold underline">Selam!</h1>
```

---

## 📌 Özet

Şu ana kadar:

- ✔️ Vite + React + TypeScript proje yapısını kurduk
- ✔️ TailwindCSS ile modern stil altyapısı ekledik

Artık projede **modern**, **sade** ve **performanslı** bir yapı hazır durumda.
