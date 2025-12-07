import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Recuperar sessão ao recarregar a página
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) setToken(savedToken);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // =========================
  // LOGIN REAL (Spring Boot)
  // =========================
  const login = async (email, senha) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        return { ok: false, message: "Email ou senha incorretos" };
      }

      const data = await response.json(); // deve receber { token }

      // Salva token e usuário
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ email }));

      setToken(data.token);
      setUser({ email });

      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Erro ao conectar com o servidor" };
    }
  };

  // =========================
  // REGISTRO REAL
  // =========================
  const register = async (nome, email, senha) => {
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      return { ok: response.ok };
    } catch (error) {
      return { ok: false, message: "Erro ao tentar registrar" };
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
