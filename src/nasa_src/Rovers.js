import React from 'react';


function Rovers(props) {
    return (
        <div className="row justify-content-md-center">
            {props.roversList.map(rover =>
                <div key={rover} className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card border-light shadow-sm">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div
                                    className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon icon-shape icon-md icon-shape-blue rounded mr-4 mr-sm-0">
                                        <img src={'../../assets/img/rovers/'+rover + '.jpg'} alt={rover}/></div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h5">Mars Rover : </h2>
                                        <button className="mb-1 btn btn-dark" onClick={()=>props.selectFunction(rover)}>{rover}</button>
                                    </div>
                                    <div className="small mt-2">
                                        <span className="fas fa-angle-up text-success"> </span>
                                        &nbsp;&nbsp;&nbsp;Click to view snapshots
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Rovers;

