import initialState from './initialState'
import { CLICK, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_PENDING, DISPLAY_SCREEN, CATCH_POKEMON } from './action'

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
        pending: false
      }
    case FETCH_POKEMON_PENDING:
      return {
        ...state,
        pending: true
      }
    case DISPLAY_SCREEN:
      return {
        ...state,
        onScreen: action.onScreen
      }
    case CATCH_POKEMON:
      return {
        ...state,
        click: state.click + 1,
        pokemons: state.pokemons.map(pokemon => {
          if (pokemon.id === state.onScreen.id) {
            const isCaught = pokemon.captureRate + action.random
            if (isCaught >= 255) {
              return {
                ...pokemon,
                isCatch: true
              }
            }
          } {
            return pokemon
          }
        })
      }
    default:
      return state;
  }
};

export default reducer 