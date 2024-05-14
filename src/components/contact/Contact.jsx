import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kbh0luw', 'template_ls9sik7', form.current, 'gwyWwKpPx-J2qxig9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>abuhosainmin@gmail.con</h6>
            <a href="mailto:abuhosainmin@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine  className='contact__option-icon' />
            <h4>Facebook</h4>
            <h6>Abu Hosain</h6>
            <a href="https://m.me/abuhosainmin@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h6>+8801319539510</h6>
            <a href="whatsapp://send?phone=+8801319539510" target='_blank'>Send a message</a>
          </article>
        </div>

        <form  ref={form} onSubmit={sendEmail}>
             <input type="text" name="fname" placeholder='Your Full Name' id="" required />
             <input type="email" name="email" placeholder='Your Email' id="" required />
             <textarea name="message" id="" cols="" placeholder='Your Message' rows="7"></textarea>
             <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
