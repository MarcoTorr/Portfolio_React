import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import cv from '../components/resume/MarcoTorresCV.pdf';


function Resume() {
return(
    <section style={{marginTop:'30px'}}>
    <h3>Sales Manager | Senior Digital Marketing Manager | Junior Front & Back End Developer</h3>
    <div style={{marginTop:'80px'}}></div>
    <h5>Coding Bootcamp - ITESM</h5>
    <p>2021</p>
    <br></br>
    <h5>International Business - Hogeschool van Amsterdam</h5>
    <p>2018-2019</p>
    <br></br>
    <h5>International Business - ITESM</h5>
    <p>2014-2019</p>
    <br></br>
    <div style={{marginBottom:'70px'}}></div>
    <h5>Download my resume <a download href={cv} >here</a></h5>
    </section>
);
}

export default Resume;