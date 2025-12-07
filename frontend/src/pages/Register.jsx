import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const success = register(email, senha);

    if (success) {
      alert("Conta criada com sucesso!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Criar Conta
        </h1>

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

          <div>
            <label className="text-white text-sm">Confirmar Senha</label>
            <input
              type="password"
              required
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow-lg"
          >
            Registrar
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-4">
          Já possui conta?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Entrar
          </Link>
        </p>

      </div>
    </div>
  );
}
