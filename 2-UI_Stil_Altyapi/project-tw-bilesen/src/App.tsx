import "./App.css";
import Card from "./components/Card";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-gray-800">Hızlı</h2>
          <p className="text-gray-600 mt-2">Tailwind ile hızlı UI geliştirmek mümkün</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-gray-800">Özelleştirilebilir</h2>
          <p className="text-gray-600 mt-2">Her şey senin kontrolünde</p>
        </div>

        <Card title="Hızlı" description="Tailwind ile hızlı UI geliştirmek mümkün" additionalClass="bg-green-500" />
        <Card title="Özelleştirilebilir" description="Her şey senin kontrolünde" />

        <UserCard name="Ömer" email="omer@gmail.com" />
      </div>
    </>
  );
}

export default App;
