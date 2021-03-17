import React from 'react';

function Movie(props) {
    if (props.movie) {
        return (
            <div className="details-content" key="movie">
                <div>
                    <h2 className="display-4" align="center">{props.movie.movie_name}</h2>
                    <ul>
                        <li className="lead">
                            {props.movie.imdb_rating}
                        </li>
                        <li className="lead">
                            {props.movie.director_name}
                        </li>
                        <li className="lead">
                            {props.movie.genre_name}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    return '';
}

export default Movie;
