import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profile-container">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>
        Welcome, {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-800"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
