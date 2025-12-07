import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdutoById } from "../services/produtosService";

export default function ProdutoDetalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function carregar() {
      const data = await getProdutoById(id);
      setProduto(data);
    }
    carregar();
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{produto.nome}</h1>
      <img src={produto.imagem} alt={produto.nome} style={{ width: 300 }} />
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>
    </div>
  );
}
