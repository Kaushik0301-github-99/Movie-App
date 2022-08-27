
import './App.css';
import {data} from './data'
import NavBar from './navBar'
import MovieCard from './movieCard'
import React from 'react';


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
  store.dispatch({
    type:"ADD_MOVIES",
    movies:data
  })
  console.log("movies added", this.props.store.getState())
}

  render() {
    const movies = this.props.store.getState();
    console.log("RENDERED")
    return (
      <div className="App">
        <NavBar />
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>favourites</div>
          </div>
          <div className='list'>
            {movies.map((movie,index)=>{
     return <MovieCard movie = {movie} key={index}></MovieCard>
    })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
