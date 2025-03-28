function encontrarProdutoComPrecoMaiorQue50(produtos) {
    return produtos.find(produto => produto.preco > 50);
}

// Exemplo de uso
const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 60 },
    { nome: "Produto C", preco: 40 },
    { nome: "Produto D", preco: 100 }
];

const produtoEncontrado = encontrarProdutoComPrecoMaiorQue50(produtos);

console.log(produtoEncontrado); 
