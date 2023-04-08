import './App.css';
import MovieList from './components/MovieList';



function App() {
  return (
    <div id='App'>
      <header className="welcome">
        <h1>Have You Seen These Movies?</h1>
        <br />
        <h2>Rate & leave your review.</h2>
      </header>
      <div className='app'>
        <MovieList />
      </div>
    </div>
  );
}

export default App;