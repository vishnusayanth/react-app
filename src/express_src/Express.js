import React from 'react';
import {useState} from 'react';
import Movies from './Movies';
import Movie from "./Movie";


function Express() {
    const [fetchDone, setFetchDone] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    let [movies, setMovies] = React.useState([]);
    React.useEffect(() => {
        setFetchDone(false);
        fetch(`https://vishnusayanth-express-app.herokuapp.com/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(resp => setMovies(resp)).then(() => setFetchDone(true))
    }, []);
    let setMovie = movie => {
        fetch(`https://vishnusayanth-express-app.herokuapp.com/movie/${movie.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(resp => setSelectedMovie(resp))
    }
    if (!fetchDone) {
        return <div style={{height:505}} align={"center"}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    } else {
        return (
            <React.Fragment>
                <h3 align="center">Top rated movies list</h3>
                <div className="col-12 col-lg-6 mb-4 overflow-auto" data-spy="scroll" style={{height:440}}>
                    <div className="card border-light shadow-sm">
                        <div className="card-header border-bottom border-light">
                            <h2 className="h5 mb-0">Movies</h2>
                        </div>
                        <Movies movies={movies} selectFunction={setMovie}/>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <div className="card-header border-bottom border-light d-flex justify-content-between">
                            <h2 className="h5 mb-0">Details</h2>
                        </div>
                        <Movie movie={selectedMovie}/>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

export default Express;
