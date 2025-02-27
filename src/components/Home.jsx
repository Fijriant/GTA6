import React, { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gambar0 from '../Assests/gambar0.jpg';
import gambar1 from '../Assests/gta6.jpg';
import gambar2 from '../Assests/gta61.jpeg';
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
      {/* Carousel */}
      <div className="container-fluid p-0">
        <Carousel fade interval={3000}>
          {[gambar0, gambar1, gambar2].map((gambar, index) => (
            <Carousel.Item key={index}>
              <img
                src={gambar}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: '100vh', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{index === 0 ? 'Lets play!' : index === 1 ? 'Its Ucok' : 'GTA 6'}</h3>
                <p>{index === 0 ? '"Hello Brother"' : index === 1 ? 'Welcome!' : 'Cj'}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Review Game Cards */}
      <div className="container text-center my-5">
        <h3 className="text-light">Review Game</h3>
        <div className="row">
          {[card1, card2, card3, card4, card5, card6].map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Card className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card} />
                <Card.Body>
                  <Card.Title>Scene {index + 1}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-light mb-4">Video</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="about-video" onClick={togglePlay}>
              <video className="w-100" autoPlay={isPlaying} loop ref={videoRef}>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-text">
              <h5 className="text-light">
                Grand Theft Auto VI is an upcoming action-adventure game being developed by Rockstar Games. This game will be the eighth in the Grand Theft Auto series, after Grand Theft Auto V, and the sixteenth overall.
                <br />
                <br />
                <strong>Initial release date:</strong> 2025 <br />
                <strong>Platforms:</strong> PlayStation 5, Xbox Series X and Series S <br />
                <strong>Developer:</strong> Rockstar Games <br />
                <strong>Series:</strong> Grand Theft Auto <br />
                <strong>Genre:</strong> Action-adventure game, Racing game, Third-person shooter <br />
                <strong>Publisher:</strong> Rockstar Games
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
