
import './App.css';
import {data} from './data'
import NavBar from './navBar'
import MovieCard from './movieCard'
import React from 'react';
import { addMovies, setShowFavourite } from './actions';


// as we know that we should make a call to the api in component did mount adn to make a component did mount we will have to make a class component here



class App extends React.Component {
componentDidMount(){
const {store} = this.props;

  // make api call 

  // step 2 subscribing to the state and subscribe takes a function 
  store.subscribe(()=>{
   console.log("UPDATED STATE")

   //! force update method is update the whole ui app forcefully 
   this.forceUpdate();
  })

  //! dispatch action => this action is use to send the data or to change the state last state 
//! and we can see that even after dispatching the action our page state is not changing so we will have to subscribe to the state 
// we created a dispatch actions into the action js file to seperate the actions 
  store.dispatch(addMovies(data))
  console.log("movies added", this.props.store.getState())
}


// now implementing a function that how can we do unfav 
isFav = (movie)=>{
  //we will have  to get the state and check that whether it contain that movie or not 
  // debugger;
  const {favourite} = this.props.store.getState();
  const index = favourite.indexOf(movie);
  if(index !==-1){
    // returning is favourite
   return true;
  }
  return false;
}


onChangeTab = (val)=>{
  this.props.store.dispatch(setShowFavourite(val))
}




  render() {
    const {list,favourite,showFavourite} = this.props.store.getState(); // now as we know that we will be getting a state as a object so we will have to only fetch the list of movies 
    console.log("RENDERED",this.props.store.getState())
    const displayMovie = showFavourite ? favourite:list;
    return (
      <div className="App">
        <NavBar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavourite ? '' :'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourite ? 'active-tabs' :''}`} onClick={()=>this.onChangeTab(true)}>favourites</div>
          </div>
          <div className='list'>
            {displayMovie.map((movie,index)=>{
     return <MovieCard movie = {movie} key={index} dispatch ={this.props.store.dispatch}  isFavourite = {this.isFav(movie) }></MovieCard>
    })}
          </div>
          {displayMovie.length===0 ? <div className='no-movie'>No movies to display</div>:null}
        </div>
      </div>
    );
  }
}

export default App;
