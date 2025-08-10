import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 py-4">
      <h1 className="text-2xl">🏠 Ana Sayfa</h1>
      <div className="flex flex-col gap-2">
        <h3>Dinamik rotalar</h3>
        <Link to="/user/1">Kullanıcı 1</Link>
        <Link to="/user/2">Kullanıcı 2</Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3>Search Params</h3>
        <Link to="/products?tip=a">Ürünler, tip a</Link>
        <Link to="/products?tip=a&sarf=e">Ürünler, tip a, sarf</Link>
        <Link to="/products?tip=b&sarf=h">Ürünler, tip b, sarf değil</Link>
      </div>
    </div>
  );
};
export default Home;
