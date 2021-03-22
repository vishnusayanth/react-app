import React from 'react';


function Camera(props) {
    if (props.photos) {
        return (
            <div className="container">
                <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">{props.roverName+" snapshots"}</h1>
                <hr className="mt-2 mb-5"/>
                <div className="row text-center text-lg-left">
                    {props.photos.map(d =>
                        <div className="col-lg-3 col-md-4 col-6" key={"img" + d.id}>
                            <a target={"_blank"} rel={"noreferrer"} href={d.img_src} className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src={d.img_src} alt={"img" + d.id}/>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    } else {
        return '';
    }

}

export default Camera;

