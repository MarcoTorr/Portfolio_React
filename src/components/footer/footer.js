import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { FaGithubSquare, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
import {Card, Button} from 'react-bootstrap';



function Footer() {
    const LiBlock= styled.div`
    list-style: none;
    position: relative;
    display: inline;
    text-transform: uppercase;
    margin: 3px 0;
    padding: 25px 25px;
    text-decoration: none;
    color: rgb(65, 15, 15);`
return(
    <div>
    <Card.Footer style={{background:'rgb(32, 37, 41)'}}>
        <ul style={{marginLeft:'40%'}}>
            <LiBlock>
                    <a href='https://github.com/MarcoTorr'><i><FaGithubSquare/></i>
                    </a>
            </LiBlock>
            <LiBlock>
                    <a href='https://www.linkedin.com/in/marcotorres96/'><i><FaLinkedin/></i>
                    </a>
            </LiBlock>
            <LiBlock>
                    <a style={{textDecoration: 'none'}} href='/contact'>Contact</a>
            </LiBlock>
        </ul>
    </Card.Footer>
    </div>
);

}

export default Footer;