import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/api/produtos")
      .then((r) => r.json())
      .then((data) => setProdutos(data.slice(0, 4))) // mostrar só os 4 primeiros
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            Bem-vindo à Premier Moto Parts
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            As melhores peças para motocicletas, com qualidade garantida e os preços
            mais acessíveis do mercado.
          </p>
          <Link
            to="/produtos"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-lg font-semibold"
          >
            Ver Produtos
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Destaques</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {produtos.map((p) => (
              <Link
                key={p.id}
                to={`/produto/${p.id}`}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden text-gray-500">
                  {p.imagem_url ? (
                    <img
                      src={p.imagem_url}
                      alt={p.nome}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  ) : (
                    "Sem imagem"
                  )}
                </div>
                <h3 className="font-semibold text-xl text-gray-800 line-clamp-2">
                  {p.nome}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
