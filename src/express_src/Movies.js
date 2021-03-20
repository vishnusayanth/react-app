import React from 'react';

function Movies(props) {
    if (props.movies) {
        return (
            <div className="card-body overflow-auto">
                {props.movies.map(movie => {
                    return (
                        <div className="row align-items-center mb-4 search-item" key={movie.name}
                             onClick={() => props.selectFunction(movie)}>
                            <div className="col">
                                <button className="btn btn-outline-dark" type="button">
                                    <span className="mr-1"><span className="fab fa-imdb"> </span></span>
                                    {movie.name}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return '';
    }
}

export default Movies;
