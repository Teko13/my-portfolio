import React, { useState } from 'react';
import './footer.css';
import ME_IMG from "../../assets/moi-font-bleu.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import ISO_1 from "../../assets/iso.jpeg";
import ISO_2 from "../../assets/iso1.jpeg";
import { SiGmail } from "react-icons/si";
import ISO_3 from "../../assets/iso2.jpeg";
import axios from 'axios';

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handlSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const url = "https://serveur.metapressnet.com/contact";
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((respose) => {
        setName("");
        setEmail("");
        setMessage('');
        alert("Votre moessage a bien été envoyé");
      })
      .catch(() => {
        console.log("zrror");
        alert("Une erreur est survenu")
      })
  }
  return (
    <footer id='footer' className='container'>
      <div className="profil-container">
        <div id="one" className="bg-container">
          <img src={ISO_1} alt="" />
        </div>
        <div id="two" className="bg-container">
          <img src={ISO_2} alt="" />
        </div>
        <div id="three" className="bg-container">
          <img src={ISO_3} alt="" />
        </div>
        <div className="photo-container">
          <div className="image-content">
            <img src={ME_IMG} alt="" />
          </div>
        </div>
        <div className="infos">
          <h2>Teko Fabrice FOLLY</h2>
          <span className="occupation">DEVELOPPEUR WEB</span>
        </div>
        <div className="contact">
          <div className="contact-infos">
            <div className="infos-content">
              <a href="mailto:ffabrice999@gmail.com" className="contact-link"><SiGmail className="link-logo" /></a>
              <a href="https://wa.me/33745178805" className="contact-link"><FaWhatsapp className="link-logo" /></a>
              <a href="tel:+33745178805" className="contact-link"><CiMobile1 className="link-logo" /></a>
            </div>
            <div className="personnal-contact">
              <ul>
                <li>Téléphone: +33 7 45 17 88 05</li>
                <li>E-mail: tekofabricefolly@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={(e) => handlSubmit(e)}>
              <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Votre nom complet" required />
              <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Votre email" required />
              <textarea onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Votre message" cols="30" rows="10" required></textarea>
              <button className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
