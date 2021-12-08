import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import {Card} from 'react-bootstrap';
import img from '../components/projects/ProfPic.jpg';



function AboutMe() {
return(
    <div>
        <Card.Body>
            <div style={{height:'50px'}}></div>
            <h2 style={{textAlign:'center'}}>Marco Torres Sanchez</h2>
            <div style={{height:'50px'}}></div>
            <div style={{height:'20px'}}></div>
            <img src={img} style={{width:'20%',marginLeft:'40%'}}></img>
            <div style={{height:'50px'}}></div>

            <p>I finished my bachelor in International Business at ITESM university in 2019. I worked 5 years in an international NGO called AIESEC where I performed in sales, team management and digital marketing. My last three years I worked creating and editing audiovisual projects, advising exportation projects from Mexico to Colombia and from Netherlands to China and rebranding my family business in private security. I got interested in technology since I was at the middle of my bachelor and wanted to learn the skills required to not only be user but develop and create technology tools. Today, I work in the areas of logistics, sales and marketing, GPS systems and full-stack development.</p>
        </Card.Body>
    </div>
);

}

export default AboutMe;