import React from "react";
import { addFavourites, removeFromfavourite } from "./actions";
class MovieCard extends React.Component{

    handleFav = ()=>{
     const {movie} = this.props;
     this.props.dispatch(addFavourites(movie))
    }

    handleUnFav = ()=>{
     const {movie} = this.props;
     this.props.dispatch(removeFromfavourite(movie))
    }


    render(){
        const {movie,isFavourite} = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}></img>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}({movie.Year})</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {isFavourite ? <button className="unfavourite-btn" onClick={this.handleUnFav}>UnFavourite</button> : 
                        <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;