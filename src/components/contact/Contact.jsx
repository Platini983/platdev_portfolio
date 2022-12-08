import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
            // service id, template id and your public key, get these by registering on EmailJs
          .sendForm('plat_wtcu32d', 'platdev_0c7ise5', form.current, '8f4BHfB_UPTnBaSNg')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>amponsahm7@gmail.com</h5>
            <a href='mailto:amponsahm7@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='.contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Michel Amponsah Platini</h5>
            <a href='https://m.me/Michel.Amponsah.Platini' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className='.contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+233248373467</h5>
            <a href='https://api.whatsapp.com/send?phone+233248373467'target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your E-mail' required />
          <input type='text' name='subject' placeholder='Subject' required />
          <textarea name="message" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
