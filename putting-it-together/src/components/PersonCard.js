import React from 'react';

const PersonCard = ({firstName, lastName, hairColor, age, haveBDay, index}) => {
    return(
        <div className="card col-10 mx-auto" >
            <h4> Name: {lastName}, {firstName} </h4>
            <p> Hair Color: {hairColor} </p>
            <p> Age: {age} </p>

            <button className= "col-3 mx-auto btn btn-warning" onClick= {() => haveBDay(index)} > Have a Birthday </button>
        </div>
    )
}

export default PersonCard;