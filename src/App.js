
import './App.css';
import {data} from './data'
import NavBar from './navBar'
import MovieCard from './movieCard'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className='main'>
      <div className='tabs'>
        <div className='tab'>Movies</div>
        <div className='tab'>favourites</div>
      </div>
      <div className='list'>
  {data.map((movie)=>{
   return <MovieCard movie = {movie}></MovieCard>
  })}
      </div>
    </div>
    </div>
  );
}

export default App;
