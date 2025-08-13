# 🧪 Testing

## 🧠 Özet

**Konular:**  
Jest / Vitest ile bileşen testi

**Dersin Konusu veya Ünite:**  
Bileşen birim testleri

**Düzey:**  
Başlangıç / Orta

**Amaç:**  
Uygulamaların temel işlevlerinin CI/CD süreçlerinin hızlanması adına otomatik test edilmesinin sağlanması için birim testlerin örneklenmesi

**Ayrılan Süre:**  
20 dk

---

## 🔧 Uygulama

Bu bölümde daha önce geliştirdiğimiz TODO App için **Jest** ve **React Testing Library** kullanarak yazılmış örnek test senaryoları mevcuttur.  
Testler şu konuları kapsar:

- Bileşenin render edilmesi
- Kullanıcı etkileşimleri
- Durum (state) yönetimi

---

## ✅ Gerekli Kurulumlar

Aşağıdaki komutu çalıştırarak Jest ve Testing Library bağımlılıklarını yükleyin:

```bash
npm install --save-dev jest vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

package.json içine test komutunu ekleyin:

```
{
  "scripts": {
    ...
    "test": "vitest"
  }
}
```

src/setupTests.ts dosyasını oluşturun:

```ts
import "@testing-library/jest-dom";
```

vitest.config.ts dosyasını oluşturun:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // 🟢 Tarayıcı ortamı sağlar
    globals: true, // describe/test gibi global API'leri aktif eder
    setupFiles: "./src/setupTests.ts", // opsiyonel: jest-dom gibi setup dosyan varsa ekle
  },
});
```

src/App.test.tsx dosyasını oluşturun

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App bileşeni", () => {
  it("Başlık görünür olmalı", () => {
    render(<App />);
    expect(screen.getByText(/Yapılacaklar Listesi/i)).toBeTruthy();
  });

  it("Henüz görev yok mesajı liste boşken görünür", () => {
    render(<App />);
    expect(screen.getByText(/Henüz görev yok./i)).toBeTruthy();
  });

  it("Görev eklenince listeye yeni öğe eklenir", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const ekleButton = screen.getByRole("button", { name: /ekle/i });

    await userEvent.type(input, "Test Görevi");
    await userEvent.click(ekleButton);

    expect(screen.queryByText(/Henüz görev yok./i)).toBeNull();
    expect(screen.getByText("Test Görevi")).toBeTruthy();
  });

  it("Görev sil butonuna tıklayınca görev listeden çıkar", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const ekleButton = screen.getByRole("button", { name: /ekle/i });

    await userEvent.type(input, "Silinecek Görev");
    await userEvent.click(ekleButton);

    expect(screen.getByText("Silinecek Görev")).toBeTruthy(); // toBeInTheDocument();

    const silButton = screen.getByRole("button", { name: /sil/i });
    await userEvent.click(silButton);

    expect(screen.queryByText("Silinecek Görev")).toBeNull();
  });
});
```

**_Testi Çalıştır_**
npm test veya npx vitest ile testi başlat:

```bash
$ npm test

> project-todo-app@0.0.0 test
> vitest


 DEV  v3.2.4 C:/Dev/Egitim/ReactEgitimi/4-Ornek_Proje/project-todo-app

 ✓ src/App.test.tsx (4 tests) 696ms
   ✓ App bileşeni > Başlık görünür olmalı 31ms
   ✓ App bileşeni > Henüz görev yok mesajı liste boşken görünür 6ms
   ✓ App bileşeni > Görev eklenince listeye yeni öğe eklenir 292ms
   ✓ App bileşeni > Görev sil butonuna tıklayınca görev listeden çıkar  365ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  18:35:21
   Duration  2.53s (transform 73ms, setup 230ms, collect 277ms, tests 696ms, environment 870ms, prepare 143ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

**Özet**

Bu bölümde:

✔️ Daha önce geliştirdiğimiz yapılacak işler uygulamasının bazı işlevlerine ait test senaryolarını vitest/jest ile test ettirdik.
