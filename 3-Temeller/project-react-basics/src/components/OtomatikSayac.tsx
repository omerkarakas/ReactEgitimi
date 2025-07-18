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
