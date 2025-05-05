import React from 'react';

const Card = ({exo}) => {
    return (
        <div className='card'>
            <li>{exo.text}</li>
            <img src={exo.image} alt={exo.attribute} />
            <i class="fa-solid fa-right-long arrow1"></i>
            <i class="fa-solid fa-left-long arrow2"></i>
        </div>
    );
};

export default Card;