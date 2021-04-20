import React from 'react';


function Rovers(props) {
    return (     
        <div className="row row-cols-1 row-cols-md-3 g-4">
             {props.roversList.map(rover =>        
                  <div key={rover} className="col">
                    <div className="card h-100">
                      <img src={'../../assets/img/rovers/'+rover + '.jpg'} className="card-img-top" alt={rover}/>
                      <div className="card-body">
                        <h5 className="card-title">Mars Rover : {rover}</h5>
                        <p className="card-text">Click below and scroll down to view images.</p>
                        <button className="btn btn-sm btn-dark"  onClick={()=>props.selectFunction(rover)}>Snapshots</button>
                      </div>
                    </div>
                  </div>  
             )}
        </div>
    );
}

export default Rovers;

