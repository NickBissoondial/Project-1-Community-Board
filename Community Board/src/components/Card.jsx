import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt={props.name} className="card-image" />
            <h2>{props.name}</h2>
            <p>{props.specialty}</p>
            <a href={props.link} target="_blank" rel="noreferrer">
                <button className="card-button">View Menu</button>
            </a>
        </div>
    );
};

export default Card;