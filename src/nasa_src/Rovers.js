import React from 'react';


function Rovers(props) {
    return (
        <div className="row justify-content-md-center">
            {props.roversList.map(rover =>
                <div key={rover} className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card border-light shadow-sm">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <img src={'../../assets/img/rovers/'+rover + '.jpg'} className="img-fluid" alt={rover}/>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h5">Mars Rover : </h2>
                                        <button className="mb-1 btn btn-dark" onClick={()=>props.selectFunction(rover)}>{rover}</button>
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

