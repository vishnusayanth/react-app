import React from 'react';


function Camera(props) {
    if (props.photos) {
        return (
            <React.Fragment>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                    {props.photos.map(d =><li data-target="#carouselExampleIndicators" key={"index-"+d.id} data-slide-to={d.id}> </li>)}
                </ol>
                <div className="carousel-inner">
                    {props.photos.map(d =>
                    <div key={"img" + d.id} className="carousel-item active">
                        <img className="d-block w-100 h-25" src={d.img_src} alt={d.rover.name + d.id}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{d.rover.name} - {d.sol}</h5>
                            <p>{d.camera.name} - {d.earth_date}</p>
                        </div>
                    </div>
                    )}
                </div>
            </React.Fragment>);
    } else {
        return (
            <div>Select Rover to see images</div>
        );
    }

}

export default Camera;

