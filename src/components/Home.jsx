import React, { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gambar0 from '../Assests/gambar0.jpg';
import gambar1 from '../Assests/gta6.jpg';
import gambar2 from '../Assests/gta61.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../Assests/card 1.jpg';
import card2 from '../Assests/card 2.jpg';
import card3 from '../Assests/card 3.jpg';
import card4 from '../Assests/card 4.png';
import card5 from '../Assests/card 5.jpg';
import card6 from '../Assests/card 6.jpg';
import Video from '../Assests/video.mp4';

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (    
    <div className="background">
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img src={gambar0} className="d-block w-100" alt="First slide" style={{ maxHeight: '100vh', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Lets play!</h3>
            <p>"Hello Brother"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={gambar1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '100vh', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Its Ucok</h3>
            <p>Wellcome!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={gambar2} className="d-block w-100" alt="Third slide" style={{ maxHeight: '100vh', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>GTA 6</h3>
            <p>Cj</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
      </div>
      <br />
      <div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='text-center text-light mb-4'>Video</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="about-video" onClick={togglePlay}>
              <video className="background w-100" autoPlay={isPlaying} loop style={{ maxWidth: '100%' }} ref={videoRef}>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-text">
              <h5>
                <span className="text-light">
                  Grand Theft Auto VI is an upcoming action-adventure game being developed by Rockstar Games. This game will be the eighth in the Grand Theft Auto series, after Grand Theft Auto V, and the sixteenth overall.<br />
                  Initial release date: 2025 <br />
                  Platforms: PlayStation 5, Xbox Series X and Series S <br />
                  Developer: Rockstar Games <br />
                  Series: Grand Theft Auto <br />
                  Genre: Action-adventure game, Racing game, Third-person shooter <br />
                  Publisher: Rockstar Games
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    </div>
);
}
