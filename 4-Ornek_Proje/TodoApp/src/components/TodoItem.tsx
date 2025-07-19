import type { Todo } from "../types";

type Props = {
  veri: Todo;
  tamamla: (id: number) => void;
  sil: (id: number) => void;
};

const TodoItem = ({ veri, tamamla, sil }: Props) => {
  return (
    <div className="flex justify-between items-center border p-3 rounded mb-2  shadow-sm">
      <span className={veri.tamamlandi ? "line-through text-gray-500" : ""}>{veri.baslik}</span>
      <div className="flex gap-2">
        <button onClick={() => tamamla(veri.id)} className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
          {veri.tamamlandi ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={() => sil(veri.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
          Sil
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
