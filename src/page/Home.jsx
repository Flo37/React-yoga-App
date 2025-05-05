import React from 'react';
import Nav from './omponents/Nav';
import pic from '../index1.js'
const Home = () => {
    return (
        <div >
          <Nav/>
<div className="home">
          {
            pic && pic.map(doc=>
              <ul key={doc.id}>
                <h1>{doc.name}</h1>
                <img src={doc.image} alt="" />
              </ul>
            )
          }
</div>
        </div>
    );
};

export default Home;