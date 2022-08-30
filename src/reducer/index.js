import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES } from "../actions";

// as we want to make our selection of movie as favoriate so what we will do that we will make our initial state as object so that we can 
// store the favoriates list also and easly add that movie into it 
const initialState = {
  list: [],
  favourite: [],
  showFavourite: false
}

export function movies(state = initialState, action) {

  console.log("MOVIES REDUCER")
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      }

    case ADD_FAVOURITES:
      return {
        ...state,
        favourite: [action.movie, ...state.favourite]
      }
    case REMOVE_FROM_FAVOURITE:
      const newFilteredArray = state.favourite.filter((movie) =>
        movie.Title !== action.movie.Title
      )
      return {
        ...state,
        favourite: newFilteredArray
      }
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourite: action.val
      }
    default:
      return state;

  }

}


// creating search reducer 
const initialSearchState = {
  result: {

  }
}
export function search(state = initialSearchState, action) {

  console.log("SEARCH REDUCER")
  return state;
}


// as we are know that we can only use the one reducer so we will have to create one root reducer 

// const initialRootState = {
//   movies: initialState,
//   search: initialSearchState
// }
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   }
// }

export default combineReducers({
  movies,
  search
})

