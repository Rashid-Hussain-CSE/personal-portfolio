import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import{FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_portfolio', 'template_uqm41md', form.current, '361kSJ3QgSjFSNxkz')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rashidhussain.cse@gmail.com</h5>
            <a href='mailto:rashidhussain.cse@gmail.com' target='_blank'>Send a mail</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsaApp</h4>
            <h5>+91 7004728688</h5>
            <a href='https://api.whatsapp.com/send?phone=7004728688' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+91 9641717453</h5>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Form</h2>
          <input type="text" name='name' placeholder='FirstName LastName' required/>
          <input type="email" name='email' placeholder='Enter your Email' required/>
          <textarea name="message" placeholder='Enter your message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact