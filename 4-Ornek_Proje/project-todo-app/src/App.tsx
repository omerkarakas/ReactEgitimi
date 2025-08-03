import "./App.css";

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./types";

function App() {
  const [liste, setListe] = useState<Todo[]>([]);

  const ekle = (baslik: string) => {
    const yeni: Todo = {
      id: Date.now(),
      baslik,
      tamamlandi: false,
    };
    setListe([yeni, ...liste]);
  };

  const tamamla = (id: number) => {
    setListe(liste.map((item) => (item.id === id ? { ...item, tamamlandi: !item.tamamlandi } : item)));
  };

  const sil = (id: number) => {
    setListe(liste.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 Yapılacaklar Listesi</h1>
      <TodoInput ekle={ekle} />
      <div className="mt-6">
        {liste.length === 0 ? (
          <p className="text-gray-500">Henüz görev yok.</p>
        ) : (
          liste.map((todo) => <TodoItem key={todo.id} veri={todo} tamamla={tamamla} sil={sil} />)
        )}
      </div>
    </div>
  );
}

export default App;
