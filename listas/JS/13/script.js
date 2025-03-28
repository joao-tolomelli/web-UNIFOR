function filtrarMaioresQueDez(array) {
    return array.filter(numero => numero > 10);
}

// Exemplo de uso
const numeros = [5, 12, 8, 15, 3, 20];
const maioresQueDez = filtrarMaioresQueDez(numeros);

console.log(maioresQueDez); // [12, 15, 20]
