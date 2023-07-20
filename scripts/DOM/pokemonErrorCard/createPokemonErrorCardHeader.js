export const createPokemonErrorCardHeader = (errorStatus) => {
    const pokemonErrorCardHeader = 
    `<div class ="card-header">
        <h2>
            Error${errorStatus}
        </h2>
    </div>`;

    return pokemonErrorCardHeader;
}