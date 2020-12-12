/** @format */

import React from "react";
import Movie from "../Movie/Movie.jsx";
import movies from "./movies.js";
import "./style.css";

class Movies extends React.Component {
    state = { ...movies };
    getMovie = (movie) => {
        return (
            <Movie
                name={movie.name}
                likes={movie.likes}
                banner={movie.banner}
            />
        );
    };
    render() {
        return (
            <div className="movie-section">
                {Object.keys(this.state).map((x) => {
                    return this.getMovie(this.state[x]);
                })}
            </div>
        );
    }
}

export default Movies;
