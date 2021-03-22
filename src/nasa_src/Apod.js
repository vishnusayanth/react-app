import React from "react";


function Apod(props) {
    if (props.item) {
        if (props.item.media_type === 'video') {
            return (
                <div key="apod">
                    <iframe width="420" height="315"
                            src={props.item.url} title={"Video"}>
                    </iframe>
                </div>
            );
        }
        else {
            return (
                <React.Fragment>
                    <img src={props.item.url} alt={"APOD from NASA"}/>
                </React.Fragment>
            );
        }
    }
    else{
        return (
            <div>
                APOD
            </div>
        )
    }
}

export default Apod;