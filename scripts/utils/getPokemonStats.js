export const getPokemonStats = (pokemonData) => {
    const pokemonStats = Object.values(pokemonData.stats);
    const stats = [];

    pokemonStats.forEach((pokemonStat) => {
        const statObject = {
            name: pokemonStat.stat.name,
            base: pokemonStat.base_stat
        };

        stats.push(statObject);
    });

    return stats;
}