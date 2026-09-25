
const API = 'https://pokeapi.co';


export async function buscarPokemon(pokemonBuscado) {

    const nombreBase = String(pokemonBuscado).toLowerCase().trim();

    const res = await fetch(`${API}/${nombreBase}`);




    if (!res.ok) {
        throw new Error(`No pudimos encontrar al Pokémon: "${pokemonBuscado}"`);
    }


    return await res.json();
}