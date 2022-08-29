import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITES } from "../actions";

// as we want to make our selection of movie as favoriate so what we will do that we will make our initial state as object so that we can 
// store the favoriates list also and easly add that movie into it 
const initialState = {
  list: [],
  favourite: [],
  showFavourite:false
}

export default function movies(state = initialState, action) {


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
        const newFilteredArray = state.favourite.filter((movie)=>
         movie.Title !== action.movie.Title
        )
        return{
          ...state,
          favourite:newFilteredArray
        }
        case SET_SHOW_FAVOURITES:
          return{
            ...state,
            showFavourite:action.val
          }
    default:
      return state;

  }

}

