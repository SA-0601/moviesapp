import { useState, useEffect } from "react";
import Form from "./components/Form";
import Navbar from "./components/NavBar";
import {getMovie} from './services/omdbapi';
import MovieDisplay from "./components/MovieDisplay";
import "./App.css";

function App() {
  //Store the data about a movie
  const [movie, setMovie] = useState(null);

    //fetch data from API
    // const getMovie = async (searchTerm) => {
    //make fetch request and store response
    //   try {
    //     const response = await fetch(
    //       `http://www.omdbapi.com/?apikey=a6bf5964&t=${searchTerm}`
    //     );
    //     const data = await response.json();
    //     setMovie(data);
    //     console.log(movie);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie("Clueless");
      setMovie(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Form movieSearch={getMovie} setMovie={setMovie} />

      <MovieDisplay movie={movie} />
      {/* {movie && <MovieDisplay movie={movie}/>} */}
    </div>
  );
}

export default App;
