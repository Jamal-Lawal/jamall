import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RxTwitterLogo} from 'react-icons/rx'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  // Email Protocol
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yhg7o2k', 'template_dj3y7go', form.current, 'eXDC1jdYm3_gium7Q')

    e.target.reset()
  };
  // Email Protocol END ==============

    return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>j.solalawal@gmail.com</h5>

            {/* This is how to add your mail as a link */}
            <a href="mailto:j.solalawal@gmail.com" target='blank '>Send a mail</a>
          </article>
          <article className="contact__option">
            <RxTwitterLogo className='contact__option-icon' /> 
            <h4>Twitter</h4>
            <h5>@JamalDotJS</h5>
            <a href="https://twitter.com/JamalDotJS/" target='blank'>Send a DM</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2341234Jamal</h5>

            {/* WhatApp API to receive direct message from your clients on your website */}
            <a href="https://wa.me/2348104110387" target='blank'>Send a message</a>
          </article>
        </div>

        {/* Email Protocol called in ref and onSubmit below */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <input type="text" name='subject' placeholder='Subject' required/>
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact