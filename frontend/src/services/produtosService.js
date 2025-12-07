const API_URL = "http://localhost:8080/api/produtos";

export async function listarProdutos() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function getProdutoById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}

export async function criarProduto(produto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  return response.ok;
}

export async function atualizarProduto(id, produto) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  return response.ok;
}

export async function deletarProduto(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}
