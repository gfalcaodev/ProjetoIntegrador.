import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: 20, background: "#222", color: "#fff" }}>
      <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/produtos" style={{ color: "white" }}>Produtos</Link>

        <div style={{ marginLeft: "auto" }}>
          {!user ? (
            <>
              <Link to="/login" style={{ color: "white", marginRight: 15 }}>
                Login
              </Link>
              <Link to="/register" style={{ color: "white" }}>
                Registrar
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              style={{
                background: "transparent",
                border: "1px solid white",
                color: "white",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Sair
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
