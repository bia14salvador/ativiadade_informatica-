function ordenarLista(lista) {
    return lista.sort((a, b) => a - b); 
}

const listaNumeros = [5, 3, 8, 1, 4, 2, 7, 6];
const listaOrdenada = ordenarLista(listaNumeros);

console.log(listaOrdenada);
