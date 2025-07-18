import "./App.css";
import AyarlanabilirSayac from "./components/AyarlanabilirSayac";
import GelismisSayac from "./components/GelismisSayac";
import GirisFormu from "./components/GirisFormu";
import IsimSelam from "./components/IsimSelam";
import Merhaba from "./components/Merhaba";
import OtomatikSayac from "./components/OtomatikSayac";
import Sayac from "./components/Sayac";

function App() {
  return (
    <div className="flex flex-col h-screen items-stretch justify-around">
      {/* Props ile bileşeni parametrik kullanma */}
      <IsimSelam isim="Ömer" />
      <IsimSelam isim="Ali" />

      <hr className="" />

      <Sayac />

      <Merhaba />

      <AyarlanabilirSayac baslangic={10} />

      <GirisFormu />

      <OtomatikSayac />

      <GelismisSayac />
    </div>
  );
}

export default App;
