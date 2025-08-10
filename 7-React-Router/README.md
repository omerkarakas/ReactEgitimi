# React Router ile Sayfa Geçişleri

## Özet

- **Dersin Konusu / Ünite:** React Router kullanarak sayfa geçişleri
- **Düzey:** Başlangıç / Orta
- **Amaç:** SPA (Single Page Application) yapısında kullanıcı deneyimini bozmadan sayfa geçişleri sağlamak
- **Ayrılan Süre:** 40dk

## 1. React Router Nedir?

SPA (Single Page Application) yapısında sayfa geçişleri kullanıcı deneyimini bozmadan URL değişiklikleriyle gerçekleştirilir. React Router, bu ihtiyacı karşılamak için kullanılan en yaygın çözümdür.

React Router, React uygulamalarında farklı URL'lere göre farklı bileşenlerin gösterilmesini sağlayan bir yönlendirme (routing) kütüphanesidir. Gerçek sayfa yenilemesi olmadan çok sayfalı deneyim sunar.

## 2. Kurulum

```bash
npm install react-router-dom
```

## 3. Sayfa Bileşenleri

```tsx
// src/pages/Home.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 py-4">
      <h1 className="text-2xl">🏠 Ana Sayfa</h1>
      <div>
        <h3>Dinamik rotalar</h3>
        <Link to="/user/1">Kullanıcı 1</Link>
        <br />
        <Link to="/user/2">Kullanıcı 2</Link>
      </div>

      <div>
        <h3>Search Params</h3>
        <Link to="/products?tip=a">Ürünler, tip a</Link>
        <br />
        <Link to="/products?tip=a&sarf=e">Ürünler, tip a, sarf</Link>
        <br />
        <Link to="/products?tip=b&sarf=h">Ürünler, tip b, sarf değil</Link>
      </div>
    </div>
  );
};
export default Home;
```

Hakkında Sayfası:

```tsx
// src/pages/About.tsx
const About = () => <h1 className="text-2xl">ℹ️ Hakkımızda</h1>;
export default About;
```

Contact Sayfası:

```tsx
// src/pages/Contact.tsx
const Contact = () => <h1 className="text-2xl">📞 İletişim</h1>;
export default Contact;
```

Bulunamadı Sayfası:

```tsx
// src/pages/NotFound.tsx
const NotFound = () => <h1 className="text-red-500">404 - Sayfa Bulunamadı</h1>;
export default NotFound;
```

## 4. Router Yapısı (App.tsx)

```tsx
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Mount");
  }, []);

  return (
    <BrowserRouter>
      <div className="p-6">
        <nav className="flex gap-4 mb-6">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/about">Hakkımızda</Link>
          {/* dikkat, böyle kullanma! */}
          <a href="/about">About(!)</a>
          <Link to="/contact">İletişim</Link>
          <Link to="/invalid-url">Hata</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
```

## 5. Temel Kavramlar

- **BrowserRouter**: URL tabanlı yönlendirmeyi sağlar
- **Routes**: Bütün route'ları kapsar
- **Route**: URL ile bileşeni eşleştirir
- **Link**: Sayfa yenilemeden yönlendirme sağlar
- _Dikkat:_ `<a>` etiketi sayfayı yeniden yükler, SPA mantığını bozar

## 6. Dinamik Rotalar ve URL Parametreleri

```tsx
// src/pages/UserDetails.tsx
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">👤 Kullanıcı Detay</h1>
      <p>
        Kullanıcı ID: <strong>{id}</strong>
      </p>
    </div>
  );
};
export default UserDetail;

// src/App.tsx
<Route path="/users/:id" element={<UserDetail />} />;
```

## 7. Search Parametreleri (Query Parameters)

Amaç: URL’de ?key=value formatında ek bilgi taşımak ve bu bilgiyi bileşenlerde okumak.

Örnek Kullanım: Filtreleme, arama, sayfalama gibi durumlarda parametreler kullanılır:

_/products?category=shoes&page=2_

useSearchParams hook’u ile kolayca okunur ve güncellenir.

- Örnek:

```ts
// src/types.ts
export type Product = { isim: string; tip: string; sarf?: string };
```

```ts
// src/constants.ts
import type { Product } from "./types";
export const products: Product[] = [
  { isim: "kalem", tip: "a", sarf: "e" },
  { isim: "silgi", tip: "a", sarf: "e" },
  { isim: "defter", tip: "a", sarf: "h" },
  { isim: "cetvel", tip: "b", sarf: "h" },
  { isim: "kitap", tip: "b" },
];
```

- Parametre Güncelleme:

```tsx
// components/ProductFilter.tsx
import { useSearchParams } from "react-router-dom";

const ProductFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateTip = (newCategory: string) => {
    searchParams.set("tip", newCategory);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <button onClick={() => updateTip("a")}>Tip A</button>
      <button onClick={() => updateTip("b")}>Tip B</button>
    </div>
  );
};
export default ProductFilter;
```

- Parametre Okuma:

```tsx
// pages/Products.tsx
import { useSearchParams } from "react-router-dom";
import ProductFilter from "../components/ProductFilter";
import { products } from "../constants";

const Products = () => {
  const [searchParams] = useSearchParams();
  const tip = searchParams.get("tip");
  const sarf = searchParams.get("sarf");
  return (
    <div className="flex flex-col gap-6">
      {products
        .filter((item) => item.tip === tip && (sarf ? item?.sarf === sarf : true))
        .map((item, index) => (
          <div key={index}>{item.isim}</div>
        ))}
      <ProductFilter />
    </div>
  );
};
export default Products;
```

---

**Not**: http://localhost:5173/products?tip=b adresi için

- searchParams.get("tip") → b değerini verir.

- searchParams.get("sarf") → null değerini verir.

## 8. Programatik Yönlendirme (useNavigate)

Bazı durumlarda (örneğin: form gönderimi sonrası) kullanıcıyı otomatik olarak başka bir sayfaya yönlendirmek gerekebilir.

```tsx
// src/pages/Login.tsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard/home");
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">🔐 Giriş Yap</h1>
      <button onClick={handleLogin} className="!bg-blue-500 text-white px-4 py-2 rounded">
        Giriş
      </button>
    </div>
  );
};
export default Login;
```

## 9. İç İçe Rotalar (Nested Routes)

Özellikle admin panellerinde ya da kullanıcı profili içinde farklı sekmeler oluştururken kullanılır.

```tsx
// src/pages/DashboardLayout.tsx
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <nav className="mb-4 space-x-4">
        <Link to="home" className="text-blue-600 underline">
          Ana Sayfa
        </Link>
        <Link to="profile" className="text-blue-600 underline">
          Profil
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
```

```tsx
// src/pages/DashboardHome.tsx
const DashboardHome = () => <p>🏠 Dashboard Ana Sayfası</p>;
export default DashboardHome;
```

```tsx
// src/pages/DashboardProfile.tsx
const DashboardProfile = () => <p>🧑‍💼 Profil Bilgileri</p>;
export default DashboardProfile;
```

```tsx
// src/App.tsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="home" element={<DashboardHome />} />
  <Route path="profile" element={<DashboardProfile />} />
</Route>
```

## Özet

✔️ `react-router-dom` kurulumu yapıldı  
✔️ Farklı sayfa bileşenleri oluşturuldu  
✔️ Router, Routes, Route, Link gibi temel yapılar kullanıldı  
✔️ SPA mimarisinde kullanıcı dostu URL yönlendirmesi geliştirildi  
✔️ 404 yönlendirmesi eklendi  
✔️ Dinamik rotalar (`/users/:id`) oluşturuldu  
✔️ `useParams` ile URL parametreleri okundu  
✔️ `useSearchParams` ile URL'den arama parametresi okundu  
✔️ `setSearchParams` ile URL' update’i yapıldı  
✔️ `useNavigate` ile programatik yönlendirme yapıldı  
✔️ Nested routes ile admin panel benzeri yapı kuruldu
