export function extrairEvolucoes(chain) {
    const evolucoes = [];
    const niveis = [];

    function processarEvolucao(etapa) {
        const nome = etapa.species.name;
        const id = etapa.species.url.split("/").slice(-2, -1)[0]; //pega o id do pokemon
        const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        // Pega o nível mínimo de evolução, se existir
        const minLevel = etapa.evolution_details.length > 0 ? etapa.evolution_details[0].min_level : null;

        evolucoes.push({ nome, imagem, minLevel });

        if (etapa.evolves_to.length > 0) {
            etapa.evolves_to.forEach(processarEvolucao);
        }
    }

    processarEvolucao(chain);
    return evolucoes;
}