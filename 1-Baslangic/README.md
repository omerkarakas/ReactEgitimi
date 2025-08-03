# React.js Başlangıç ve Kurulum

## Özet

### Konular:

- React.js Nedir? Ne amaçla Kullanılır?
- React’in Avantajları ve Temel Özellikleri
- Virtual DOM Kavramı
- Kurulumların yapılması
- Geliştirme altyapısının kurulması
- Proje oluşturma
- Projeyi VS Code ile açma ve çalıştırma
- TailwindCSS Kurulumu ve Ayarları

### Dersin Konusu veya Ünite:

Kurulumlar ve yeni proje başlatma

**Düzey:** Başlangıç / Orta  
**Amaç:** Geliştirme altyapısının hazırlanması  
**Ayrılan Süre:** 40dk

---

## 1. React.js Nedir? Ne amaçla Kullanılır?

React.js, kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Facebook tarafından geliştirilmiştir. Özellikle tek sayfa uygulamaları (SPA) için hızlı, etkileşimli ve yeniden kullanılabilir bileşenler geliştirmeyi kolaylaştırır.

### Neden React?

- Kullanıcı arayüzlerini bileşenlere ayırarak modüler ve sürdürülebilir hale getirir.
- Yüksek performans sunar (Virtual DOM sayesinde).
- Geniş topluluk ve ekosistem desteğine sahiptir.
- Web dışında (React Native) mobil uygulama geliştirmeye de olanak tanır.

---

## 2. React’in Avantajları ve Temel Özellikleri

**Bileşen (Component)-Tabanlı Mimari:**  
Her bir arayüz parçası bağımsız bir bileşen olarak tasarlanır ve tekrar kullanılabilir.

**JSX (JavaScript XML):**  
HTML benzeri söz dizimini JavaScript içinde kullanmayı sağlar.

**State ve Props Yönetimi:**  
Verinin bileşenler arasında nasıl aktarıldığını ve nasıl saklandığını kontrol ederiz.

**Virtual DOM:**  
DOM ile doğrudan değil, sanal bir kopyası ile çalışır. Değişiklikler hızlı ve verimli şekilde güncellenir.

**Gelişmiş Araçlar ve Eklentiler:**  
React Router, Redux, Context API, React Query gibi birçok yardımcı teknolojiyle büyütülebilir.

---

## 3. Virtual DOM Kavramı

React, HTML DOM’un (Document Object Model) sanal bir kopyasını (Virtual DOM) bellekte oluşturur.

### Nasıl çalışır?

1. Kullanıcı bir etkileşimde bulunduğunda (örneğin inputa yazı yazdığında), önce Virtual DOM güncellenir.
2. React, eski ve yeni Virtual DOM’u karşılaştırır (diffing).
3. Sadece değişen parçalar gerçek DOM’a minimum müdahaleyle uygulanır.

### Avantajları:

✔️ Daha hızlı güncellemeler  
✔️ Daha iyi performans  
✔️ Gereksiz render işlemlerinden kaçınma

---

## 4. Kurulumların Yapılması

- Node.js: [nodejs.org](https://nodejs.org/en/download)
- VS Code: [code.visualstudio.com](https://code.visualstudio.com)

---

## 5. Proje Oluşturma

```bash
npm create vite@7.0.2
# project name : “project-name”
# Select a framework : react
# Select a variant : TypeScript
```

---

## 6. Projeyi VS Code ile Açma ve Çalıştırma

```bash
cd “project-name”
code .
npm install
npm run dev
```

---

## 7. TailwindCSS Kurulumu ve Ayarları

[Kurulum Dokümantasyonu](https://tailwindcss.com/docs/installation/using-vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

**vite.config.ts** dosyasını düzenle:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

**CSS dosyasına ekle:**

```css
@import "tailwindcss";
```

**Kullanım örneği:**

```jsx
<h1 className="text-3xl font-bold underline text-green-400">Selam React.js!</h1>
```

---

## Özet

Şu ana kadar:

✔️ React.js nedir? Avantajları ve Temel Özellikleri  
✔️ Virtual DOM nedir?  
✔️ Vite + React + TypeScript proje yapısını kurduk  
✔️ TailwindCSS ile modern stil altyapısı ekledik

**Artık projede modern, sade ve performanslı bir yapı hazır durumda.**
