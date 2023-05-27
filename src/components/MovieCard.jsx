import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <div>
                <img alt='' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <h3>{movie.original_title}</h3>
            </div>
            <button>Add to List</button>
        </div>
    )
};

export default MovieCard;