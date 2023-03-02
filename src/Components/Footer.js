import React from 'react';
import "../styles/Footer.css";
import { Twitter, Facebook, Instagram } from '@mui/icons-material'

function Footer() {
  return (

    <footer className="portfolio-footer">
      <div className="footer">
        <p><a href="#"><Twitter /></a>
        <a href="#"><Facebook /></a>
        <a href="#"><Instagram /></a>
        <br></br>
        &copy; 2023 All rights are reserved </p>



      </div>
    </footer>


  )
}

export default Footer