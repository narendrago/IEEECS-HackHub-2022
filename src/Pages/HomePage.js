import React from 'react';

import {Link} from 'react-router-dom';
import '../styles/_typography.scss';
import Card from 'react-bootstrap/Card';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Welcome to  
                    <span> Crypt Ridez</span>
                </h1>
                <p className="h-sub-text">
                   Have an amazing ride through smart contracts!
                </p>
                <div className="icons">
               

                    <br/>
                  
<Card bg="primary" text="white" style={{ width: '18rem' ,marginRight: '25px'}}>
    <Card.Header> </Card.Header>
    <Card.Body>
      <Card.Title>DRIVER REGISTRATION</Card.Title>
      <Card.Text>
        New driver? Register before you drive!
         <br/>
         <Link to="/driversignup">
        <button className="btn btn-secondary btn-block" style={{ backgroundColor: 'black'}}> DRIVER?</button>
        </Link>
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card bg="info" text="white" style={{ width: '18rem' }}>
    <Card.Header> </Card.Header>
    <Card.Body>
      <Card.Title>RIDER REGISTRATION</Card.Title>
      <Card.Text>
        New Rider? Register before you ride! 
        <br/>
        <Link to="/ridersignup">
        <button className="btn btn-secondary btn-block" style={{ backgroundColor: 'black'}}> RIDER?</button>
        </Link>
      </Card.Text>
    </Card.Body>
  </Card>

  <br />
  <br />
  <br />
                </div>
            </header>
        </div>
    )
}

export default HomePage;
