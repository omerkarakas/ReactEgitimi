import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
      <nav className="mb-4 space-x-4">
        <Link to="home" className="text-green-600!">
          Ana Sayfa
        </Link>
        <Link to="profile" className="text-green-600!">
          Profil
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
