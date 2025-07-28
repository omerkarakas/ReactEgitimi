// src/pages/UserDetail.tsx
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">👤 Kullanıcı Detay</h1>
      <p>
        Kullanıcı ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default UserDetail;
