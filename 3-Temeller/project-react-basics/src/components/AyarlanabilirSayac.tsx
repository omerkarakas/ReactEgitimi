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
