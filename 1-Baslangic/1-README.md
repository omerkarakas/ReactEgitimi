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

## 💎 Shadcn/ui Kurulumu

👉 [Resmi Dokümantasyon](https://ui.shadcn.com/docs/installation/vite)

### ✅ `tsconfig.json` içinde `compilerOptions` sonuna ekle:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

### ✅ `tsconfig.app.json` içinde:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

### ✅ Node tiplerini devDependency olarak ekle:

```bash
npm add -D @types/node
```

### ✅ `vite.config.ts` dosyasına alias tanımı ekle:

```ts
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### ✅ Shadcn başlatma ve bileşen ekleme:

```bash
npx shadcn@latest init
# Bir stil seçin: neutral

npx shadcn@latest add button
```

### 🧩 Komponent örneği: `components/ui/button.tsx`

### ✅ Projede kullanımı:

```tsx
import { Button } from "./components/ui/button";

<div className="flex min-h-svh flex-col items-center justify-center">
  <Button>Merhaba Shad</Button>
</div>;
```

---

## 📌 Özet

Şu ana kadar yaptıkların:

- ✔️ Vite + React + TypeScript proje yapısını kurdun
- ✔️ TailwindCSS ile modern stil altyapısı ekledin
- ✔️ shadcn/ui bileşenleri ile UI'yi geliştirmeye başladın

Artık projende **modern**, **sade** ve **performanslı** bir yapı hazır durumda.
