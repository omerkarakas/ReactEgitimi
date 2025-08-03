import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen items-stretch justify-around">
      <p>Merhaba</p>

      <div className="flex justify-between items-center">
        <span>Sol</span>
        <span>Sağ</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <div className="text-sm md:text-lg lg:text-xl">Bu metnin boyutu cihaz genişliğine göre değişir.</div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div>Logo</div>
        <nav className="flex flex-col md:flex-row gap-4">
          <a href="#">Ana Sayfa</a>
          <a href="#">Hakkında</a>
        </nav>
      </div>

      <div
        className="bg-white text-black dark:bg-black dark:text-white"
        onClick={() => {
          console.log("Tema değişti");
          document.documentElement.classList.toggle("dark");
        }}
      >
        Tema değişimine göre renkler değişir.
      </div>

      <div className="p-4 m-2 border border-gray-300">Boşluklu içerik</div>

      <div className="bg-blue-500 text-white hover:bg-blue-700">Buton</div>

      <p className="text-lg font-bold">Başlık</p>
      <button className="px-4 py-2 !bg-green-600 !text-white rounded hover:!bg-green-700 transition">Kaydet</button>

      <div className="hidden md:block">Sadece büyük ekranlarda görünür</div>
      <div className="transition duration-300 hover:scale-105">Hover ile büyür</div>
      <div className="border border-gray-300 rounded shadow-md">Kart içerik</div>
    </div>
  );
}

export default App;
