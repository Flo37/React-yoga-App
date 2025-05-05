import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav'>
   <NavLink to ="/position">
   <h1 className='start'>Welcome</h1>
   </NavLink>            
        </div>
    );
};

export default Nav;