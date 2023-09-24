import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7zkkbl', 'template_s5meg1k', form.current, 'Y8V5JWfRSui7qa6Yi')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        toast.error('Error sending message. Please try again.');
      });
      form.current.reset();
  };

  return (
    <section className='contact section'>
      <h2 className='section__title'>Get In <span>Touch</span></h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>harshalmodhave@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+91 7499277321</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/harshal.modhave/" className="contact__social-link" target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
            <a href="https://twitter.com/ModhaveHarshal" className="contact__social-link" target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
            <a href="https://www.instagram.com/___harshalmodhave/" className="contact__social-link" target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://www.linkedin.com/in/harshal-modhave-053106208/' className='contact__social-link' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
            <a href='https://wa.me/+917499277321' className='contact__social-link' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type='text' name="user_name" placeholder='Your Name' className='form__control' required />
            </div>
            <div className="form__input-div">
              <input type='email' name="user_email" placeholder='Your Email' className='form__control' required />
            </div>
            <div className="form__input-div">
              <input type='text' name="user_subject" placeholder='Your Subject' className='form__control' />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea name="user_message" placeholder='Your Message' className='form__control textarea' required></textarea>
          </div>

          <button className='button' type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
