import React from 'react'
import '../styles/Project.css'
import project1Gif from '../project/project-1.gif';
import project2Gif from '../project/project-2.gif';
import project3Gif from '../project/project-3.gif';

function Projects() {
  return (
    <div className='body'>
      <h1>Projects</h1>
      
      <div className="project-cards">
        <div className="project-card">
          <img src={project1Gif} alt="Project 1" />
          <a href="#">Project 1</a>
          <p>A web application built with ReactJS and Node.js that allows users to search and filter a database of products.</p>
        </div>
        <div className="project-card">
          <img src={project2Gif} alt="Project 2" />
          <a href="#">Project 2</a>
          <p>An e-commerce website built with ReactJS, Node.js, and MongoDB that allows users to browse and purchase products.</p>
        </div>
        <div className="project-card">
          <img src={project3Gif} alt="Project 3" />
          <a href="#">Project 3</a>
          <p>A social networking platform built with ReactJS and Express.js that allows users to create profiles, connect with friends, and share content.</p>
        </div>
      </div>
      </div>
  );
}


export default Projects