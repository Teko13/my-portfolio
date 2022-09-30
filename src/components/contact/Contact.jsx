import React from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6qcm7ym', 'template_ubx0cjo', form.current, 'CVsphrxbu_xAoyDMe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contact'>
            <h5>Me</h5>
            <h2>Contacter</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>tekofabricefolly@gmail.com</h5>
                        <a href="mailto:tekofabricefolly@gmail.com" target='_blank'>M'envoyer un mail</a>
                    </article>
                    <article className="contact__option">
                        <FaTelegramPlane className='contact__option-icon' />
                        <h4>Telegram</h4>
                        <h5>@teko_fabrice</h5>
                        <a href="https://t.me/teko_fabrice" target='_blank'>M'envoyer un message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+33 6 18 14 57 85</h5>
                        <a href="https://wa.me/+33618145785" target='_blank'>M'envoyer un message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Votre nom complet' required />
                    <input type="email" name='email' placeholder='Votre mail' required />
                    <textarea name="message" rows='7' placeholder='Votre message' required></textarea>
                    <button className='btn btn-primary' type='submit'>Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;