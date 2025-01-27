// Função que remove acentos de uma string para facilitar a pesquisa
export function removerAcentos(nome){
    // Normaliza a string e remove caracteres diacríticos (acentos)
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}