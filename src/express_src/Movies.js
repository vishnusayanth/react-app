import React from 'react';

function Movies(props) {
    let [movies, setMovies] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://vishnusayanth-express-app.herokuapp.com/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(resp => setMovies(resp))
    }, [])
    return (
        <div className="overflow-scroll" key="movies">
            <input className="form-control" id="search" placeholder="Search"/>
            <ul className="list-group">
                {movies.map(movie => {
                        return (
                            <li className="list-group-item cursor movies" key={movie.id}
                                onClick={props.selectFunction(movie)}>
                                <h5>{movie.name}</h5>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}
export default Movies;
