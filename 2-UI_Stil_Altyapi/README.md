# 2. UI ve Stil Altyapısını Hazırlama

## 🎯 Özet

**Düzey:** Başlangıç / Orta  
**Süre:** 40 dakika  
**Amaç:** Arayüz geliştirme altyapısının hazırlanması  
**Konu:** Kullanıcı arayüzü ve stil altyapısı oluşturma

## 📚 Konular

- TailwindCSS Temelleri
- Bileşen Oluşturma ve Parçalama
- Responsive Tasarım
- Karanlık Mod ve Temalandırma
- Tasarım Prensipleri

---

## 🚀 TailwindCSS Temelleri

### 1. Layout Yapısı: `flex` ve `grid`

#### `flex` örneği:

```jsx
<div className="flex justify-between items-center">
  <span>Sol</span>
  <span>Sağ</span>
</div>
```

#### `grid` örneği:

```jsx
<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### 2. Responsive Design (Mobil Uyumlu Tasarım)

```jsx
<div className="text-sm md:text-lg lg:text-xl">Bu metnin boyutu cihaz genişliğine göre değişir.</div>
```

#### Responsive Navbar örneği:

```jsx
<div className="flex flex-col md:flex-row md:justify-between">
  <div>Logo</div>
  <nav className="flex flex-col md:flex-row gap-4">
    <a href="#">Ana Sayfa</a>
    <a href="#">Hakkında</a>
  </nav>
</div>
```

### 3. Dark / Light Mode

```jsx
<div className="bg-white text-black dark:bg-black dark:text-white">Tema değişimine göre renkler değişir.</div>
```

```js
document.documentElement.classList.toggle("dark");
```

### 4. Spacing

```jsx
<div className="p-4 m-2">Boşluklu içerik</div>
```

### 5. Renk ve Arkaplan

```jsx
<div className="bg-blue-500 text-white hover:bg-blue-700">Buton</div>
```

### 6. Typography

```jsx
<p className="text-lg font-bold">Başlık</p>
```

### 7. Button ve Etkileşim

```jsx
<button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Kaydet</button>
```

### 8. Görünürlük

```jsx
<div className="hidden md:block">Sadece büyük ekranlarda görünür</div>
```

### 9. Animasyon ve Geçiş

```jsx
<div className="transition duration-300 hover:scale-105">Hover ile büyür</div>
```

### 10. Border ve Shadow

```jsx
<div className="border border-gray-300 rounded shadow-md">Kart içerik</div>
```

## ⚙️ Uygulama: TailwindCSS ile Kart Bileşeni

### `src/components/Card.tsx`

```tsx
type CardProps = {
  title: string;
  description: string;
  additionalClass?: string;
};

const Card = ({ title, description, additionalClass }: CardProps) => {
  return (
    <div className={"shadow-md rounded-xl p-6 border " + (additionalClass ?? "bg-white")}>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
```

### Kullanımı

```tsx
import Card from "@/components/Card";

<div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <Card title="Hızlı" description="Tailwind ile hızlı UI geliştirmek mümkün" additionalClass="bg-green-500" />
  <Card title="Özelleştirilebilir" description="Her şey senin kontrolünde" />
</div>;
```

## ♻️ Bileşenleri Parçalama

### `src/components/UserCard.tsx`

```tsx
import Card from "./Card";

type UserCardProps = {
  name: string;
  email: string;
};

function UserCard({ name, email }: UserCardProps) {
  return <Card title={name} description={email} additionalClass="bg-blue-500" />;
}

export default UserCard;
```

### Kullanımı

```tsx
import UserCard from "./components/UserCard";

<UserCard name="Ömer" email="omer@gmail.com" />;
```

## 🌗 Karanlık Mod ve Temalandırma

### `index.html`

```html
<html class="dark">
  <body>
    <div id="root" class="bg-white dark:bg-black"></div>
  </body>
</html>
```

### Komponent bazlı örnek

```jsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Bu arka plan temaya göre değişir.</div>
```

## 🎨 Tasarım Prensipleri

| Prensip          | Açıklama                                    |
| ---------------- | ------------------------------------------- |
| Tekrarı azalt    | UI bileşenlerini parçalara böl              |
| Tailwind Utility | Az class, çok anlam                         |
| Mobile-first     | sm:, md: gibi sınıflarla responsive tasarım |

---

## ✅ Bu bölümde öğrendiklerimiz

✔️ Tailwind ile sade ve profesyonel UI oluşturmak  
✔️ Bileşenleri bölerek yeniden kullanılabilir hale getirmek  
✔️ Karanlık mod desteği sağlamak
