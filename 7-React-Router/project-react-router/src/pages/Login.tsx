// advanced routing
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Giriş kontrolü başarılıysa:
    navigate("/dashboard/home");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">🔐 Giriş Yap</h1>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Giriş
      </button>
    </div>
  );
};

export default Login;
