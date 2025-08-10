# 13. Performans Optimizasyonu

## 📄 Özet

**Konular:** React.js Uygulamaları Performans Optimizasyonu  
**Dersin Konusu veya Ünite:** Performans Optimizasyon  
**Düzey:** Başlangıç / Orta  
**Amaç:** Büyüyen uygulamaların performans kaybı yaşamaması  
**Ayrılan Süre:** 40 dk

---

## 🔧 Uygulama

React uygulamalarında performans iyileştirmesi, uygulamanın daha hızlı çalışmasını ve kullanıcı etkileşimlerine daha çabuk yanıt vermesini sağlar.

### 1. `React.memo` — Gereksiz Render’ları Önleme

```tsx
const Button = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Tıkla</button>;
});
```

- Sık sık render edilen ama props'u nadiren değişen bileşenlerde kullanılmalı.
- Aşırı kullanım, karmaşık koda ve bellek yüküne yol açabilir.

### 2. `useCallback` — Fonksiyon Yeniden Oluşturmayı Önleme

Oluşturulan her fonksiyon her render'da yeniden tanımlanıyor ise ( default davranış), alt bileşenlerin de yeniden renderine neden olur.

Bu fonksiyon bağımlılıklar değişmedikçe fonksiyonun yeninden oluşturulmasını engeller.

```tsx
const handleClick = useCallback(() => {
  console.log("Tıklandı");
}, []);
```

- Bağımlılıklara dikkat, bağımlılıklar belirtilmezse kod, olması gerektiği gibi değil de bir önceki versiyonu ile çalışabilir!

### 3. `useMemo` — Hesaplamaları Önbellekleme

Bu fonksiyon ağır hesaplamaları yeniden yapmak yerine içine aldığı fonksiyonun sonucu hatırlar.

```tsx
const expensiveResult = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

- Ağır hesaplamalarda faydalı.
- Gereksiz yere kullanılmamalı.

### 4. Kod Bölme (Code Splitting)

```tsx
const LazyComponent = React.lazy(() => import("./MyComponent"));

<Suspense fallback={<div>Yükleniyor...</div>}>
  <LazyComponent />
</Suspense>;
```

- Sayfa ilk açıldığında tüm kodları yüklemek yerine sadece gereken kısmı yükler.

### 5. Liste Optimizasyonu — Doğru `key` Kullanımı

Listelerde her öğeye benzersiz key verilmesi performans için kritiktir.

```tsx
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
```

- **Dizi indeksi**ni key olarak kullanmak önerilmez, varsa item’ı belirleyen unique değer kullanılmalıdır. Silme işlemi gerçekleşirse indeksler kayabilir ve bu durum hatalara neden olabilir!

```tsx
{
  items.map((item, index) => <li key={index}>{item.name}</li>);
}
```

### 6. Sanallaştırma (Virtualization)

"react-window" veya "react-virtual" gibi kütüphanelerle uzun listelerin sadece görünen kısmı render edilir.

```tsx
import { FixedSizeList as List } from "react-window";

<List height={400} itemCount={1000} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>Item {index}</div>}
</List>;
```

- Böylece uzun listelerin sadece görünür kısmı render edilir.

### 7. Resim ve Asset Optimizasyonu

```html
<img src="resim.jpg" loading="lazy" />
```

- Lazy loading uygula, uygun format ve boyut kullan.

### 8. Pagination veya Infinite Scroll

- Tüm veriyi tek seferde yüklemek yerine parça parça getir.

### 9. DevTools ile Performans Ölçümü

- React Developer Tools → **Profiler** sekmesi ile render sürelerini analiz et.

- Gereksiz render’lar, prop zinciri, render süresi gibi metrikleri gösterir.

### 10. State Yönetimini Minimumda Tut

- Global state sadece gerekli olduğunda kullanılmalı. Aksi takdirde tüm ağaç tekrar render edilir.

---

## 📊 Kısaca

| Teknik              | Amaç                                 |
| ------------------- | ------------------------------------ |
| React.memo          | Gereksiz render'ları engellemek      |
| useCallback         | Fonksiyon referansını korumak        |
| useMemo             | Ağır hesaplamaları önbelleğe almak   |
| Kod Bölme           | Başlangıç yükünü azaltmak            |
| Liste optimizasyonu | Sanallaştırma ve doğru key kullanımı |
| Görsel optimizasyon | Daha hızlı yükleme                   |
| DevTools            | Render sürelerini analiz etmek       |
| State ayırma        | Ağaçtaki etkileri azaltmak           |

---

## 🔍 Özet

Bu bölümde:

- ✔️ `React.memo`, `useCallback`, `useMemo`, code splitting, lazy loading gibi yöntemleri kullandık.
- ✔️ React DevTools ile performans analizi yaptık.
- ✔️ Pagination, state yönetimi gibi konuları performans açısından değerlendirdik.
