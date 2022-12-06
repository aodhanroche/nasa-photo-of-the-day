import React from 'react';

const NasaPhoto = props => {
    return (
        <div className = 'Nasa-Photo-Wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}></img>
            <p className = 'explanation'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;