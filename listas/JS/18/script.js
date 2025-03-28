// Criando um objeto
const usuario = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Convertendo o objeto para uma string JSON e armazenando no LocalStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperando o item do LocalStorage e convertendo de volta para objeto
const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

// Exibindo os dados na tela
document.getElementById("resultado").innerText = `Nome: ${usuarioRecuperado.nome}, Idade: ${usuarioRecuperado.idade}, Cidade: ${usuarioRecuperado.cidade}`;
