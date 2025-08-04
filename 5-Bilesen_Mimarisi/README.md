# Bileşen Mimarisi ve Props Drilling

## Özet

### 1. Konular:

- Bileşen mimarisi neden önemlidir?
- Uygulama nasıl parçalara ayrılır?
- "Props Drilling" nedir?
- Props drilling ile gelen problemler nelerdir?
- Bu problemi azaltmak için neler yapılabilir?
- Geliştirilen özel bileşenler
- Jest ile bileşen testi

### 2. Dersin Konusu veya Ünite:

- Props drilling
- Storybook (Micro frontend projesi bileşenleri)
- Bileşen testi

### 3. Düzey:

Başlangıç / Orta

### 4. Amaç:

- Bileşenlerin birlikte nasıl parametrik kullanılabildiğini öğrenmek

### 5. Ayrılan Süre:

40dk

## Uygulama

## React'te Bileşen Mimarisi

React'te her şey bir bileşendir.

Ancak uygulama büyüdükçe:

- Her işlevi App.tsx içinde yazmak karmaşıklığı artırır
- Kod tekrarları oluşur
- Okunabilirlik ve bakım zorlaşır

### Önerilen Yaklaşım

- UI bileşenleri küçük ve tek amaçlı olmalı
- Yapılandırıcı (container) ve gösterimsel (presentational) bileşenler ayrılmalı
- Kapsamlı dosya yapısı planlanmalı

### Örnek Klasör Yapısı:

```
src/
├── components/
│   ├── Todo/
│   │   ├── TodoInput.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   └── layout/
│       └── PageContainer.tsx
├── pages/
│   └── Home.tsx
├── App.tsx
```

## Props Drilling Nedir?

Props drilling, **verinin en üst bileşenden en alt bileşene kadar** ara bileşenlerden geçerek aktarılması durumudur.

**Problem**: Veriyi kullanmayan ara bileşenler sadece "aktarmakla" uğraşır. Bu, anlamsız bağlar ve karmaşık bağımlılıklar doğurur.

Aşağıdaki bileşenlerin iç içe çağırıldığını düşünün.

```typescript
// App → Sayfa → Kart → Buton → onClick

// App.tsx:
export const App = () => {
  const logoutHandler = () => { doSomething() }
  return <>
    ...
    <Sayfa logoutHandler={logoutHandler}/>
  </>
}

// Sayfa.tsx
const Sayfa = (props: {logoutHandler: () => void}) => {
  ...
  return <Kart logoutHandler={props.logoutHandler} />
}

// Kart.tsx
const Kart = (props: {logoutHandler: () => void}) => {
  ...
  return <Button onClick={props.logoutHandler}>
}
```

Burada `logoutHandler` fonksiyonu sadece en alttaki Buton'da kullanılacaksa bile, tüm bileşenlerden prop olarak geçirilmek zorunda kalır.

## Props Drilling'in Zararları

| **Problem**          | **Açıklama**                                   |
| -------------------- | ---------------------------------------------- |
| Bağımlılık artar     | Üstten alta her değişiklik tüm zinciri etkiler |
| Okunabilirlik azalır | props karmaşık hale gelir                      |
| Test zorluğu         | Bağımsız test yapmak zorlaşır                  |
| Kod tekrarları       | Her bileşen aynı prop'ları taşımak zorunda     |

### Örnek:

```typescript
// App.tsx
const App = () => {
  const isim = "Ayşe";
  return <Seviye1 isim={isim} />;
};

const Seviye1 = ({ isim }: { isim: string }) => <Seviye2 isim={isim} />;

const Seviye2 = ({ isim }: { isim: string }) => <Seviye3 isim={isim} />;

const Seviye3 = ({ isim }: { isim: string }) => <p>Merhaba, {isim}</p>;
```

Bu zincirde sadece Seviye3 kullanıyor ama herkes taşıyor.

## Çözüm

Global state yönetimi ile tüm bileşenlerin erişebileceği bir store oluşturmak.

- **Küçük orta yazılımlar için**: Context API. Bir sonraki bölümde anlatılacak.
- **Daha büyük uygulamalar için**: Redux (veya Zustand gibi çözümler). Bir sonraki bölümde Redux Toolkit anlatılacak.

## Özet

Bu bölümde:

✔️ Bileşenlerin nasıl iç içe ve fonksiyonel olarak ayrılarak kullanılabildiğini  
✔️ Bileşenlerin props ile nasıl parametrik olabileceği  
✔️ Hiyerarşik olarak üst bileşenden alt bileşenlere parametre paylaşımının nasıl yapıldığını

öğrendik.
