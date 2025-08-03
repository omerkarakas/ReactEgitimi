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
