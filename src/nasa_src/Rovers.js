import React from 'react';


function Rovers(props) {
    let roversList = ['spirit', 'opportunity', 'curiosity'];
    return (
        <div>
            {roversList.map(rover => <div key={rover}>
                <button onClick={() => props.selectFunction(rover)}>{rover}</button>
                <br/>
            </div>)}
        </div>
    );
}
export default Rovers;

