export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES"
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT"
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST"


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

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(searchText){
    // 6716576c
const url = `https://www.omdbapi.com/?apikey=6716576c&t=${searchText}`;
return function(dispatch){
    fetch(url).then(response =>response.json()).then((movie) =>{console.log('movie',movie)
    dispatch(addMovieSearchResult(movie))
});
}
}


export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    }
}