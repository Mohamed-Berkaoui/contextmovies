import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Box from "../Box";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(function () {
    axios.get("http://localhost:3000/movies").then(function (res) {
      setMovies(res.data);
    });
  }, []);
  console.log(movies); 
  return (
    <div className="film-container">
      {movies.map(function (film) {
        return (
        <Box key={film.id} film={film}/>
        );
      })}
    </div>
  );
}

export default Home;
