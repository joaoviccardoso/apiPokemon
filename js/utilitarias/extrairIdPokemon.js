export function extrairEvolucoes(chain) {
    const evolucoes = [];

    function processarEvolucao(etapa) {
        const nome = etapa.species.name;
        const id = etapa.species.url.split("/").slice(-2, -1)[0]; //pega o id do pokemon
        const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        evolucoes.push({ nome, imagem });

        if (etapa.evolves_to.length > 0) {
            etapa.evolves_to.forEach(processarEvolucao);
        }
    }

    processarEvolucao(chain);
    return evolucoes;
}