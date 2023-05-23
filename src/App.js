import React, { useState, useEffect } from "react";

import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
