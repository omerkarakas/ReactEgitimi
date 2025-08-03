# ⚙️ React Geliştiricileri için JavaScript ve TypeScript

## 📌 Özet

### 🎯 Konular:

- React Geliştiricileri için JavaScript
- React Geliştiricileri için TypeScript

### 📚 Dersin Konusu / Ünite:

- Düzey: Başlangıç / Orta
- Amaç: React kodlama için gerekli temel bilgileri kazandırmak
- Ayrılan Süre: ⏱️ 40 dk

---

## 💻 React Geliştiricileri için JavaScript

React geliştirirken en sık karşılaştığımız modern **JavaScript** özellikleri:

### 1. `const`, `let`, `var` Farkları

```js
const sabit = 10; // Değiştirilemez
let degistirilebilir = 5; // Blok içinde geçerli
var eski = 3; // Tüm fonksiyonda geçerli (kullanma)
```

### 2. Arrow Function

```js
const topla = (a, b) => a + b;
```

> React bileşenleri de birer arrow function’dır.

### 3. Destructuring (Nesne & Dizi Parçalama)

```js
const user = { ad: "Ahmet", yas: 25 };
const { ad, yas } = user;

const dizi = [1, 2, 3];
const [birinci] = dizi;
```

### 4. Spread ve Rest Operatörü

```js
const a = [1, 2];
const b = [...a, 3]; // [1, 2, 3]

const user = { ad: "Ayşe" };
const yeniUser = { ...user, yas: 30 };

function topla(...sayilar) {
  return sayilar.reduce((t, s) => t + s, 0);
}
```

### 5. Array Metotları (`map`, `filter`, `find`)

```js
const urunler = [
  { id: 1, ad: "Kalem" },
  { id: 2, ad: "Silgi" },
];

urunler.map((u) => <li key={u.id}>{u.ad}</li>);
urunler.filter((u) => u.id !== 2);
urunler.find((u) => u.id !== 2);
```

### 6. Ternary Operatörü (Kısa if-else)

```js
const girisYapildi = true;
const mesaj = girisYapildi ? "Hoş geldin!" : "Lütfen giriş yap.";
```

### 7. Optional Chaining & Nullish Coalescing

```js
const kullanici = { ad: "Ali" };

kullanici?.email; // undefined, hata vermez
const yas = kullanici.yas ?? 18; // yoksa 18 ata
```

### ✅ React ile En Çok Kullanılan JS Özellikleri

- ✔️ `map`, `filter` kullanımı
- ✔️ `useState` içinde spread/rest kullanımı
- ✔️ `props` destructuring
- ✔️ Arrow function ile event handler yazımı

---

## 🟦 React Geliştiricileri için TypeScript

React bileşenleri yazarken karşılaşacağımız temel **TypeScript özellikleri**:

### 1. Tür (Type) Tanımlama

```ts
let sayi: number = 10;
let ad: string = "Ahmet";
let aktif: boolean = true;
```

### 2. Dizi ve Obje Tipleri

```ts
const isimler: string[] = ["Ali", "Ayşe"];

type Kullanici = {
  id: number;
  ad: string;
};

const user: Kullanici = { id: 1, ad: "Mehmet" };
```

### 3. Fonksiyon Tipleri

```ts
function topla(a: number, b: number): number {
  return a + b;
}

const selamla = (isim: string): void => {
  console.log("Merhaba", isim);
};
```

### 4. Props Tanımlama (React için Örnek)

```ts
type SelamProps = {
  isim: string;
};

const Selam = ({ isim }: SelamProps) => {
  return <p>Merhaba, {isim}</p>;
};
```

### 5. Union & Optional Tipler

```ts
let cinsiyet: "erkek" | "kadın";

type Kullanici = {
  ad: string;
  email?: string; // opsiyonel alan
};
```

### 6. `useState` ile Tip Belirtme

```ts
const [sayi, setSayi] = useState<number>(0);
const [kullanici, setKullanici] = useState<Kullanici | null>(null);
```

### 7. Event ve Input Türleri

```ts
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

### ✅ React ile En Çok Kullanılan TS Özellikleri

- ✔️ `type` ve `interface` kullanımı
- ✔️ `Props` ve `State` tipleri
- ✔️ `React.FC<Props>` bileşen tanımlama
- ✔️ API verisi için modelleme

---

> Bu doküman, React geliştiricilerinin modern JS ve TS özelliklerini kavrayarak verimli kod yazmaları için hazırlanmıştır.
