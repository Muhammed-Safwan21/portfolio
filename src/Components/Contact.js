import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className='label'>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Type here</label>
        <input type="text" id='message' name='message'/>
        <button className="btn"> Send Message </button>
       </form>
       
       </section>
  )
}

export default Contact