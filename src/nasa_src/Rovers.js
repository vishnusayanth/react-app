import React from 'react';


function Rovers(props) {
    return (     
        <div class="row row-cols-1 row-cols-md-3 g-4">
             {props.roversList.map(rover =>        
                  <div key={rover} class="col">
                    <div class="card h-100">
                      <img src={'../../assets/img/rovers/'+rover + '.jpg'} class="card-img-top" alt={rover}>
                      <div class="card-body">
                        <h5 class="card-title">Mars Rover : {rover}</h5>
                        <p class="card-text">Click below to view images.</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted" onClick={()=>props.selectFunction(rover)}>Click me!</small>
                      </div>
                    </div>
                  </div>  
             )}
        </div>
    );
}

export default Rovers;

