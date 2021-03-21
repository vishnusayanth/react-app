import React from 'react';
import {useState} from 'react';
import Rovers from "./Rovers";
import Camera from "./Camera";
import Apod from "./Apod";


function Nasa() {
    let token = process.env.REACT_APP_NASA_API_KEY;
    let apod = `https://api.nasa.gov/planetary/apod?api_key=${token}`;
    const [photos, setPhotos] = React.useState(null);
    let roversList = ['spirit', 'opportunity', 'curiosity'];
    const [selectedRover, setSelectedRover] = useState(null);
    let [apodItem, setApodItem] = React.useState(null);
    React.useEffect(() => {
        fetch(
            apod
        ).then(res => res.json()).then(res => setApodItem(res));
    }, [apod, setApodItem]);
    React.useEffect(() => {
        if (selectedRover) {
            fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=1000&page=1&api_key=${token}`
            ).then(res => res.json()).then(res => setPhotos(res.photos));
        }
    }, [selectedRover, token]);

    return (
        <React.Fragment>
            <h3 align="center" className={"display-4"}>NASA</h3>
            <div className="overflow-auto" data-spy="scroll">
                <h3 align="center">Rovers</h3>
                <Rovers roversList={roversList} selectFunction={setSelectedRover}/>
            </div>
            <div>
                <h3 align="center">Details</h3>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <Camera apiKey={token} photos={photos}/>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div>
                <Apod item={apodItem}/>
            </div>
        </React.Fragment>
    );
}

export default Nasa;
