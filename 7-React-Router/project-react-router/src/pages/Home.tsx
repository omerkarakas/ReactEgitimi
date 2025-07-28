import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl">🏠 Ana Sayfa</h1>

      {/* advanced routing */}
      <Link to="/user/1">Kullanıcı 1</Link>
      <br />
      <Link to="/user/2">Kullanıcı 2</Link>
    </>
  );
};
export default Home;
