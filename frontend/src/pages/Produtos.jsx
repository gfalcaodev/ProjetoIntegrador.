import { useEffect, useState } from "react";
import { listarProdutos } from "../services/produtosService";
import { Link } from "react-router-dom";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregar() {
      const data = await listarProdutos();
      setProdutos(data);
    }
    carregar();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Produtos</h1>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {produtos.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 20, width: 250 }}>
            <img src={p.imagem} alt={p.nome} style={{ width: "100%" }} />

            <h2>{p.nome}</h2>
            <p>R$ {p.preco.toFixed(2)}</p>

            <Link to={`/produto/${p.id}`}>
              <button style={{ marginTop: 10 }}>Ver detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
