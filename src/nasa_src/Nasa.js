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
    if (!apodItem || !roversList) {
        return <div style={{height: 505}} align={"center"}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    } else {
        return (
            <React.Fragment>
                <h3 align="center" className={"display-4"}>NASA</h3>
                <div>
                    <Rovers roversList={roversList} selectFunction={setSelectedRover}/>
                </div>
                <button type="button" className="btn btn-sm btn-tertiary col-sm-3" data-toggle="modal"
                        data-target="#modal-achievement">Astronomy Picture Of the Day
                </button>
                <div className="modal fade" id="modal-achievement" tabIndex="-1" role="dialog"
                     aria-labelledby="modal-achievement" aria-hidden="true">
                    <div className="modal-dialog modal-tertiary modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header mx-auto">
                                <p className="lead mb-0 text-white">{apodItem.title}</p>
                            </div>
                            <div className="modal-body">
                                <div className="py-3 px-5 text-center">
                                    <Apod item={apodItem}/>
                                </div>
                                <p className="mb-4 text-white overflow-auto" data-spy="scroll"
                                   style={{height: 200}}>{apodItem.explanation}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-white text-tertiary">Date
                                    : {apodItem.date}</button>
                                <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Camera apiKey={token} roverName={selectedRover} photos={photos}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Nasa;
