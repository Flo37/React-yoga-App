import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from "../index2.json"
import Card from './omponents/Card';
const Position = () => {
    
    return (
        <div>  
        
                <NavLink to="/">
                <h1>Home</h1>
                </NavLink>
       <ul className='yoga_pic'>
        {Img && Img.map(exo=>
        
           <Card  key={exo.id} exo={exo}/>
        
        )}
        </ul>    
        </div>
    );
};

export default Position;