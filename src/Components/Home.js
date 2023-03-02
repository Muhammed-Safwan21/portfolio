import React from "react";
import "../styles/Home.css";
import Typewriter from 'typewriter-effect'
import {GitHub,Email,LinkedIn} from '@mui/icons-material'


function Home() {
  return (
      <div>
        <div className="page">
         <div className="about">
         
        
         <h1>
             Hi, I'm{' '}
             <Typewriter
               options={{
                 strings: ['Muhammed Safwan'],
                 autoStart: true,
                 loop:true
                 
                 
                 
               }}
             />
           </h1>
           <h3>Full Stack Developer</h3>
           <div className="icons">
           <a href="https://github.com/Muhammed-Safwan21"><GitHub/></a>
           <a href="#"><Email /></a>
           <a href="#"><LinkedIn/></a>
            </div>
           
           <p>
            I'm passionate about
            creating elegant and efficient solutions to complex problems, and I'm always
            looking to learn new things and take on new challenges.
           </p>
           <div className="resume">
           
           <a href="https://docs.google.com/presentation/d/1W4ovPKH74defviq6tNF9VLxf-NDe88lz5lzDv61OdXQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button >Resume</button>
      </a>
      </div>
           
          </div>
         <div className="hello">
        
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        


         </div>
        </div>
        
        
        </div>
  );
}

export default Home;
