import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
          <Route path="/movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h2>err</h2>}></Route>


        </Routes>
      </Router>
    

    </div>
  );
}

export default App;
