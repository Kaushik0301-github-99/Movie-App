export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES"
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"


//  add movie action creation 
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

// add favourites action creation
export function addFavourites(movie){
    return{
        type:ADD_FAVOURITES,
        movie:movie
    }
}

// implemeting unFav action creation 
export function removeFromfavourite (movie){
 return {
    type:REMOVE_FROM_FAVOURITE,
    movie:movie
 }
}

// action to show the favourites 
export function setShowFavourite(val){
   return{
    type:SET_SHOW_FAVOURITES,
    val:val
   }
}