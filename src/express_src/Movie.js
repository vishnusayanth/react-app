import React from 'react';

function Movie(props) {
    if (props.movie) {
        console.log(props.movie);
        return (
            <div className="card-body">
                <ul className="list-group list-group-flush list my--3">
                    <li className="list-group-item px-0">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="user-avatar">
                                    <img className="rounded-circle" alt="Cinema icon"
                                         src={"../../assets/img/cinema.jpg"}/>
                                </span>
                            </div>
                            <div className="col-auto ml--2">
                                <h4 className="h6 mb-0">
                                    <span>{props.movie.movie_name}</span>
                                </h4>
                                <ul>
                                    <li>{props.movie.director_name}</li>
                                    <li>{props.movie.genre_name}</li>
                                </ul>
                            </div>
                            <div className="col text-right">
                                <span className="btn btn-sm btn-tertiary">
                                    IMDB : {props.movie.imdb_rating}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    return '';
}

export default Movie;
