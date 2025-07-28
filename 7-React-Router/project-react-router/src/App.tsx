import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import UserDetail from "./pages/UserDetail";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardProfile from "./pages/DashboardProfile";
import Login from "./pages/Login";

const App = () => {
  console.log("A new render...");

  useEffect(() => {
    console.log("Mount");
  }, []);

  return (
    <BrowserRouter>
      <div className="p-6">
        <nav className="flex gap-4 mb-6">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/about">Hakkımızda</Link>

          {/* böyle kullanma */}
          <a href="/about">About(!)</a>

          <Link to="/contact">İletişim</Link>
          <Link to="/invalid-url">Hata</Link>

          {/* advanced routing */}
          <Link to="/login">LOGIN</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          {/* advanced routing */}
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="profile" element={<DashboardProfile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
