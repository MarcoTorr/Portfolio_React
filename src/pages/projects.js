import React, { useState } from 'react';
import {Carousel, Card, Button} from 'react-bootstrap';
import img1 from '../components/projects/Consepril.png';
import img2 from '../components/projects/Ecommerce.png';
import img3 from '../components/projects/DaySchedule.png';
import img4 from '../components/projects/HoriseonWebsite.png';
import img5 from '../components/projects/NoteTaker.png';
import img6 from '../components/projects/ParotaDelCarmen.png';
import img7 from '../components/projects/PassGen.png';
import img8 from '../components/projects/Quiz.png';
import img9 from '../components/projects/WeatherDash.png';




function Projects() {
return(
    <section>
        <div style={{height:'30px'}}></div>
        <h1 style={{textAlign:'center'}}>Projects</h1>
        <div style={{height:'40px'}}></div>
        <Card.Body>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="Consepril"
      />
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Consepril</h3>
        <p>Website for a Private Security Company to be deployed in 2022.</p>
        <Button variant="light" href='https://marcotorr.github.io/CONSEPRIL_test/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/CONSEPRIL_test'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Ecommerce"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Insomnia BackEnd Ecommerce</h3>
        <p>Back end for an e-commerce site by modifying starter code. Configurations were made to Express.js API to use Sequelize to interact with a MYSQL database.</p>
        <Button variant="light" href='https://github.com/MarcoTorr/Ecommerce_BackEnd'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Day Schedule"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Day Organizer</h3>
        <p>Tool to locally store events for the day, which works as a day organizer.</p>
        <Button variant="light" href='https://marcotorr.github.io/Day_Organizer/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/Day_Organizer'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img4}
        alt="Horiseon Website"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Horiseon Website</h3>
        <p>First website test, applying the knowldge from my first month in coding.</p>
        <Button variant="light" href='https://marcotorr.github.io/Code-Refactor-V2/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/Code-Refactor-V2'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img5}
        alt="Note Taker"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Note Taker</h3>
        <p>Simple Note Taker using Express.</p>
        <Button variant="light" href='https://noteetaker.herokuapp.com/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/Note_Taker'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img6}
        alt="Parota del Carmen"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Parota del Carmen</h3>
        <p>E-commerce developed from scratch for Parota del Carmen in Cancun, Mexico.</p>
        <Button variant="light" href='http://parotadelcarmen.herokuapp.com/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/DanielRg3/Second-Project'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img7}
        alt="Password Generator"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Password Generator</h3>
        <p>Tool that Generates a random Password according to the parameters specified (Length, special characters, etc).</p>
        <Button variant="light" href='https://marcotorr.github.io/PasswordGenerator/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/PasswordGenerator'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img8}
        alt="Quiz"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Quiz</h3>
        <p>Simple quiz using javascript</p>
        <Button variant="light" href='https://marcotorr.github.io/Quiz_Java/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/Quiz_Java'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img9}
        alt="Weather Dash"
      />
  
      <Carousel.Caption style={{backgroundColor:'gray',color:'white'}}>
        <h3>Weather Dashboard</h3>
        <p>Weather Dashboard tool to consult the weather in any city using a third-party API.</p>
        <Button variant="light" href='https://marcotorr.github.io/Weather_Dashboard/'>
            Visit Website
        </Button>
        <br></br>
        <br></br>
        <Button variant="light" href='https://github.com/MarcoTorr/Weather_Dashboard'>
            Visit Repository
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Card.Body>
  </section>
)
}

export default Projects;