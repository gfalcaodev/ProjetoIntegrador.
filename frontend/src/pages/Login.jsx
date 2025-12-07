import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    const result = await login(email, senha);

    if (result.ok) {
      navigate("/");
    } else {
      setErro(result.message || "Erro ao fazer login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Entrar
        </h1>

        {erro && (
          <p className="text-red-400 text-center mb-3">{erro}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              required
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="seuemail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-white text-sm">Senha</label>
            <input
              type="password"
              required
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow-lg"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-4">
          Não tem conta?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Criar conta
          </Link>
        </p>

      </div>
    </div>
  );
}
