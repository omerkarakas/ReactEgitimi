# Global State

## 📄 Özet

**Konular:**

- Context API
- Redux Toolkit

**Dersin Konusu veya Ünite:**

- Global State Yönetimi

**Düzey:**

- Başlangıç / Orta

**Amaç:**

- Props kullanmadan uygulamanın her yerinden durum bilgisine ulaşmak

**Ayrılan Süre:**

- 40dk

---

## 🛠️ Uygulama

### **1. Context API**

React’in **Context API** özelliği, “props drilling” (yani bir veriyi gereksiz yere katmanlarca prop olarak aşağı taşımak) problemini çözmek için ideal bir yöntemdir.

#### 1. Context Oluşturma

```tsx
// src/contexts/UserContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

type UserContextType = {
  name: string;
  setName: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");

  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser UserProvider içinde kullanılmalı");
  }
  return context;
};
```

#### 2. Kullanıcıdan isim alma

```tsx
// src/components/UserForm.tsx
import { useUser } from "../contexts/UserContext";

const UserForm = () => {
  const { name, setName } = useUser();

  return (
    <input
      className="border p-2 rounded"
      type="text"
      placeholder="Adınızı yazın..."
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default UserForm;
```

#### 3. İsmi ekrana yazma

```tsx
// src/components/WelcomeMessage.tsx
import { useUser } from "../contexts/UserContext";

const WelcomeMessage = () => {
  const { name } = useUser();
  if (!name) return null;
  return <h2 className="mt-4 text-xl">Hoş geldin, {name}!</h2>;
};

export default WelcomeMessage;
```

#### 4. App.tsx içinde Provider ile sarmalama

```tsx
// src/App.tsx
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import UserForm from "./components/UserForm";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col gap-8 max-w-xl mx-auto mt-10 px-4 shadow-md rounded-xl p-6 border">
        <h1 className="text-xl font-bold ">Kimler gelmiş?</h1>
        <UserForm />
        <WelcomeMessage />
      </div>
    </UserProvider>
  );
}

export default App;
```

**Bu örnekte:**

- `UserContext` ile kullanıcı adını global bir state yaptık.
- `UserForm` bileşeni, bu state'i değiştirdi.
- `WelcomeMessage` bileşeni, bu state'i kullandı.
- Hiçbir props aktarımı yapılmadı.
- Uygulama sade, okunabilir ve yönetilebilir kaldı.

### **2. Redux Toolkit**

Redux: Orta ve büyük projeler için ideal bir global state yönetimi aracıdır. Redux Toolkit ise Redux’un modern ve sade kullanımlı güncel versiyonudur.

Şimdi basit bir sayaç (counter) uygulaması yapalım:

#### 1. Kurulum

```bash
npm install @reduxjs/toolkit react-redux
```

#### 2. Store oluşturma

```ts
// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

#### 3. Slice tanımlama

```ts
// src/store/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

#### 4. Uygulama kodunu Redux sağlayıcısı ile sarmalama

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

#### 5. Counter bileşeni - Redux Kullanımı

```tsx
// src/components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded w-60 text-center">
      <h2 className="text-xl mb-2">Sayaç</h2>
      <p className="text-2xl mb-4">{count}</p>
      <div className="flex justify-center gap-2">
        <button onClick={() => dispatch(decrement())} className="px-3 py-1 border rounded">
          -
        </button>
        <button onClick={() => dispatch(increment())} className="px-3 py-1 border rounded">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

#### 6. App.tsx içinden bileşeni kullanım

```tsx
// src/App.tsx
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen p-6 flex justify-center items-center">
      <Counter />
    </div>
  );
}
export default App;
```

**Bu örnekte:**

- `configureStore` ile store oluşturuldu.
- `createSlice` ile reducer ve action'lar tanımlandı.
- `Provider`, `useSelector`, `useDispatch` kullanıldı.

## 📄 Özet

Bu bölümde:

- ✔️ Context API ile global state yönetimini
- ✔️ Redux Toolkit ile global state yönetimini
  öğrendik.
