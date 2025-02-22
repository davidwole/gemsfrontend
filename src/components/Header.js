import { Link } from "react-router-dom";

export default function Header() {
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div className="header">
      <Link to="/">
        <h2 className="logo">Gems</h2>
      </Link>
      {user && (
        <p onClick={logout} className="logout">
          Logout
        </p>
      )}
    </div>
  );
}
