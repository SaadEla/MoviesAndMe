// Store/Reducers/favoriteReducer.js

//créer li an initialisiw biha state dyalna
const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
        //findIndex une fct qui cherche f tbleau si ne trouve pas l'index retourne -1 sinon renvoie son idex
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        //darorat dir state immuable ohna filter fct li at supprimi kan diro diman ..state bach t copie state dyalek
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        //tcopie dakchi li 3endek f state dyalek o zid 3lih action.value dyalek
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite