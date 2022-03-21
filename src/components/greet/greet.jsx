import React from 'react';
import "./greet.css"

const Greet = (props) => {
    // console.log('props',props);
    return (
        <div>
            {props.h1}
            <h2>hello {props.name}</h2>
            <p stle={{color:"orange"}}>i am {props.age} years old</p>
            <div style={{
                border: "3px solid violet",
                width: "300px",
                height: "300px",
                fontSize: "30px",
                margin: "10px auto",
                }}>block</div>
            <img className='image' src={props.image} alt={props.image}/>
        </div>
    );
};

export default Greet;