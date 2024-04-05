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
      <h3 className='text-light'>Review game</h3>
      <div className="row">
        <div className="col-4 mb-5 mt-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Scene 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 mb-5 mt-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Scene 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 mb-5 mt-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Scene 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card4} />
            <Card.Body>
              <Card.Title>Scene 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card5} />
            <Card.Body>
              <Card.Title>Scene 5</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card6} />
            <Card.Body>
              <Card.Title>Scene 6</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
    </div>
  );
};
