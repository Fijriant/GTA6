import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import card1 from '../Assests/card 1.jpg';
import card2 from '../Assests/card 2.jpg';
import card3 from '../Assests/card 3.jpg';
import card4 from '../Assests/card 4.png';
import card5 from '../Assests/card 5.jpg';
import card6 from '../Assests/card 6.jpg';

export const Content = () => {
  return (
    <div className="container text-center">
      <br />
      <br />
      <br />
      <h3 className="text-light">Review game</h3>
      <div className="row gx-3">
        {[card1, card2, card3, card4, card5, card6].map((image, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={image} className="img-fluid" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Scene {index + 1}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="mt-auto">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};
