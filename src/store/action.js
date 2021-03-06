export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'
export const DISPLAY_SCREEN = 'DISPLAY_SCREEN'
export const CATCH_POKEMON = 'CATCH_POKEMON'


// parenthses permet de return en implicit
export const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons: pokemons,
});

export const fetchPokemonPending = () => ({
  type: FETCH_POKEMON_PENDING,
});

export const displayScreen = (pokemons) => {
  const filterPoke = pokemons.filter(pokemon => !pokemon.isCatch)
  const max = filterPoke.length
  const random = Math.floor(Math.random() * max) ;
  const onScreen = filterPoke[random];
  return dispatch => (
    dispatch({
      type: DISPLAY_SCREEN,
      onScreen
    })
  )
};

export const catchPokemon = () => {
  const random = Math.floor(Math.random() * 255) ;
  return dispatch => (
    dispatch({ 
      type: CATCH_POKEMON,
      random: random
    })
  )
};
