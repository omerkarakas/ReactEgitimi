# 3. Temel React Kavramları

## Özet

**Konular:**

- Fonksiyonel bileşenler nedir ve nasıl yazılır?
- JSX Nedir?
- Props (özellikler) ile bileşenlere veri nasıl gönderilir?
- useState ile bileşen içi state yönetimi
- useEffect ile bileşen yaşam döngüsü ve yan etkiler
- useState + Props Kombinasyonu
- Pratik Örnek: Basit Bir Form
- Uygulama: Her Saniye Artan Sayaç
- Gelişmiş Sayaç Uygulaması (Başlat/Duraklat/Sıfırla)

**Dersin Konusu veya Ünite:** React’ın yapı taşları  
**Düzey:** Başlangıç / Orta  
**Amaç:** React’ın temel işlevlerini tanımak  
**Ayrılan Süre:** 40dk

---

## Uygulama

### Fonksiyonel Bileşenler

- Bileşeni oluşturma:

```tsx
// src/components/Mesaj.tsx
const Mesaj = () => {
  return <h1 className="text-xl font-bold">Merhaba React!</h1>;
};
export default Mesaj;
```

- Bileşeni kullanma:

```tsx
// Kullanımı
import Mesaj from "./components/Mesaj";
function App() {
  return <Mesaj />;
}
```

---

## JSX Nedir? HTML Gibi Ama Değil

JSX (JavaScript XML), JavaScript içinde HTML benzeri bir sözdizimi kullanmamıza olanak sağlayan özel bir yapıdır.
React bileşenlerinde arayüzü tanımlamak için JSX kullanılır. JSX, aslında derlendiğinde React.createElement(...) fonksiyonlarına dönüşür.

### JSX Örneği

```tsx
const Selam = () => {
  return <h1>Merhaba, React!</h1>;
};
```

Bu yapı aslında şuna dönüşür:

```tsx
React.createElement("h1", null, "Merhaba, React!");
```

### HTML vs JSX Farkları

| HTML               | JSX                      | Açıklama                                                              |
| ------------------ | ------------------------ | --------------------------------------------------------------------- |
| class              | className                | JSX’te `class` JS anahtar kelimesi olduğu için `className` kullanılır |
| for                | htmlFor                  | Etiket bağlama işleminde `htmlFor` kullanılır                         |
| onclick=""         | onClick={{}}             | Event'ler camelCase ve süslü parantezle verilir                       |
| style="color: red" | style={{ color: "red" }} | Stil verme nesne olarak tanımlanır                                    |

## JSX Kullanım Örnekleri

Tek satırda yazılabilir

```tsx
// 1. Tek satırda yazılabilir
const Merhaba = () => <p>Selam!</p>;
```

Çoklu elementler için bir wrapper gerekir

```tsx
const Kart = () => (
  <div className="p-4 border rounded">
    <h2>Başlık</h2>
    <p>Açıklama</p>
  </div>
);
```

### Kök Öğesi Kuralı

```tsx
// Hatalı
return (
  <h1>Başlık</h1>
  <p>Açıklama</p>
)

// Doğru
return (
  <>
    <h1>Başlık</h1>
    <p>Açıklama</p>
  </>
)
```

### Dinamik İçerik

JSX içinde {} kullanılarak değişken, fonksiyon sonucu veya hesaplama yapılabilir.

```tsx
const Kullanici = ({ isim }: { isim: string }) => {
  return <p>Merhaba, {isim.toUpperCase()}!</p>;
};
```

### Koşullu ve Listeleme

```tsx
// Şartlı gösterim (if else)
{
  girisYapildiMi ? <p>Hoş geldin!</p> : <p>Lütfen giriş yapın.</p>;
}

// Şartlı gösterim (if)
{
  kullanici && <p>Hoş geldin {kullanici.isim}!</p>;
}

// Listeleme
{
  urunler.map((urun) => <li key={urun.id}>{urun.ad}</li>);
}
```

---

## Props ile Veri Aktarma

Bileşeni oluşturma:

```tsx
// src/components/IsimSelam.tsx
type Props = {
  isim: string;
};

const IsimSelam = ({ isim }: Props) => {
  return <p className="text-lg">Merhaba, {isim}!</p>;
};
export default IsimSelam;
```

Bileşeni kullanma:

```tsx
import IsimSelam from "./components/IsimSelam"
...
<IsimSelam isim="Ayşe" />
<IsimSelam isim="Mehmet" />
```

---

## useState: Bileşen İçinde Durum (State) Yönetimi

React'te **durum (state)**, kullanıcıyla etkileşim sonrası değişen verileri tutmak için kullanılır. Her bileşenin kendi state’i olabilir.

```tsx
import { useState } from "react";

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const Sayac = () => {
  const [sayi, setSayi] = useState(0);

  return (
    <div className="text-center space-y-4 border-2 p-4 rounded-xl">
      <p className="text-2xl font-bold">{sayi}</p>
      <button
        className="px-4 py-2 rounded"
        onClick={() => {
          setSayi(sayi + 1);
          console.log("sayi:", sayi);
        }}
      >
        Ekle
      </button>

      {/* islem uzun sürecekse async await kullanılmalı, ve setSayi'da parametere olarak fonksiyon kullanılmalı */}
      <button
        className="px-4 py-2 rounded"
        onClick={async () => {
          await wait(1000);
          //   setSayi(sayi - 1);
          setSayi((x) => x - 1);
          console.log("sayi:", sayi);
        }}
      >
        Çıkar
      </button>
    </div>
  );
};

export default Sayac;
```

### Neler oluyor?

**const [sayi, setSayi] = useState(0)**

useState(0) → initial değeri 0 olan bir number değişken (state) ve bu state’i set edecek fonksiyonu tuple (farklı değişken tiplerine sahip sabit boyutlu bir array) olarak dönen bir fonksiyondur.

Bu notasyon ile tuple’dan gelen ilk eleman “sayi” isimli state’e assign edilir. İkinci eleman ise bu state’i manipüle edecek setSayi(number) fonksiyonuna assign edilir.

“sayi = 5” teknik olarak doğru bir js komutu olsa da, bir sonraki render’e taşınmaz.

setSayi(5) ise durumu değiştirir, ve bir sonraki render’e taşınır.

setSayi(sayi+1) durumu değiştirir, ancak bir sonraki render’a kadar sayi ui’da sabit kalacaktır. Render olmadan peşi sıra çağrılar sayi’yi eski değerinde görür. Örneği canlı inceleyin.

---

## useEffect: Bileşen Yaşam Döngüsü ve Yan Etkiler

useEffect hook'u, React bileşenlerinin "yaşam döngüsü" ile ilgili işlemleri yapmamızı sağlar. Bu, genellikle:

- Bileşen ilk yüklendiğinde

- Belirli bir state veya prop değiştiğinde

- Bileşen ekrandan kaldırıldığında (unmount)

kullanılır.

useEffect(
() => {

. . . // _etki işlemleri_

return ()=>{

. . . // _unmount, disposal işlemleri_

}

},

[ ] // _bağımlılık dizisi_, "ne değişirse bu effect çalışsın?" sorusunun cevabı
)

- [] → bağımlılık dizisi boş olduğunda, effect sadece ilk render’da çalışır.
- bağımlılık dizisi yoksa useEffect her renderde çalışır.
- Dikkatli kullanmalı, içerisinde yapılan yeni bir state operasyonu bir başka render’i tetikler.

Basit Uygulama Örneği: Sayfa Açıldığında Kullanıcıyı Selamla :

```tsx
import { useEffect, useState } from "react";

const Merhaba = () => {
  const [mesaj, setMesaj] = useState("");

  useEffect(() => {
    setMesaj("Hoş geldin! Uygulamaya giriş yaptın.");
  }, []);

  return <p className="text-lg">{mesaj}</p>;
};
```

### Ne Zaman Kullanılır?

- API'den veri çekmek
- Tarayıcıya bir mesaj göstermek
- Timer kurmak / temizlik yapmak

## useState + Props Kombinasyonu

- Bileşen oluşturma

```tsx
// src/components/AyarlanabilirSayac.tsx
import { useState } from "react";

type SayacProps = {
  baslangic: number;
};

const AyarlanabilirSayac = ({ baslangic }: SayacProps) => {
  const [sayi, setSayi] = useState(baslangic);

  return (
    <div>
      <p className="text-2xl">{sayi}</p>
      <button onClick={() => setSayi(sayi + 1)}>+1</button>
    </div>
  );
};

export default AyarlanabilirSayac;
```

- Bileşeni kullanma:

```tsx
import Mesaj from "./components/AyarlanabilirSayac"
...
<AyarlanabilirSayac baslangic={5} />

```

---

## Pratik: Basit bir form

```tsx
import { useState } from "react";

const GirisFormu = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Giriş yapılıyor: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="E-posta adresiniz"
      />
      <button className="px-4 py-2 rounded">Gönder</button>
    </form>
  );
};

export default GirisFormu;
```

---

## Uygulama: Her Saniye Artan Sayaç

Amaç:

- Sayfa açıldığında sayaç 0'dan başlasın
- Her 1 saniyede bir sayı artsın
- Bileşen kapatıldığında temizlik yapılsın

```tsx
import { useEffect, useState } from "react";

const OtomatikSayac = () => {
  const [saniye, setSaniye] = useState(0);

  useEffect(() => {
    // Her 1 saniyede bir çalışacak timer oluştur
    const timer = setInterval(() => {
      setSaniye((prev) => prev + 1);
    }, 1000);

    // Temizlik: Bileşen ekrandan kaldırılırsa timer durdurulsun
    return () => clearInterval(timer);
  }, []); // sadece bir kez kurulsun

  return (
    <div className="text-center mt-8">
      <p className="text-2xl font-bold">Geçen Süre: {saniye} saniye</p>
    </div>
  );
};
export default OtomatikSayac;
```

---

## Gelişmiş Sayaç (Başlat / Duraklat / Sıfırla)

```tsx
import { useEffect, useState } from "react";

const GelismisSayac = () => {
  const [saniye, setSaniye] = useState(0);
  const [aktif, setAktif] = useState(false);

  useEffect(() => {
    let timer: number;

    if (aktif) {
      timer = setInterval(() => {
        setSaniye((s) => s + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [aktif]);

  const sifirla = () => {
    setSaniye(0);
    setAktif(false);
  };

  return (
    <div className="text-center mt-10 space-y-6">
      <p className="text-3xl font-bold"> {saniye} saniye</p>

      <div className="flex justify-center gap-4">
        <button onClick={() => setAktif((a) => !a)}>{aktif ? "Duraklat" : "Başlat"}</button>

        <button onClick={sifirla}>Sıfırla</button>
      </div>
    </div>
  );
};

export default GelismisSayac;
```

---

## Özet

✔️ Fonksiyonel bileşenleri yazdık  
✔️ Props ile veri geçmeyi öğrendik  
✔️ useState ile state yönetimi yaptık  
✔️ useEffect ile yan etkileri yönettik  
✔️ Basit formlar ve sayaçlar geliştirdik
