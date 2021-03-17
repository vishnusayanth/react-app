import React from 'react';


function Camera(props) {
    if (props.photos) {
        return (
            <div key="camera">
                {props.photos.map(d =>
                    <div key={d.id}>
                        <p>{d.id}</p>
                        <p>{d.rover.name}</p>
                        <p>{d.sol}</p>
                        <p>{d.camera.name}</p>
                        <p><img src={d.img_src} alt={d.id}/></p>
                        <p>{d.earth_date}</p>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>Select Rover to see images</div>
        );
    }

}

export default Camera;

