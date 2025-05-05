import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/Home';
import Position from './page/Position';


const App = () => {
  return (
    <div>
   <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/position' element={<Position/>}/>
            </Routes>
            </BrowserRouter>
    </div>
  );
};

export default App;