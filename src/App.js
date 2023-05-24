import axios from "axios";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <React.Fragment className="App">
      <Header />
      <main>
        <MovieScreen 
        movieList={movieList}
        watchList={watchList}
        page={page}
        setPage={setPage}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
