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
      <p className="text-3xl font-bold">{saniye} saniye</p>

      <div className="flex justify-center gap-4">
        <button onClick={() => setAktif((a) => !a)}>{aktif ? "Duraklat" : "Başlat"}</button>

        <button onClick={sifirla}>Sıfırla</button>
      </div>
    </div>
  );
};

export default GelismisSayac;
