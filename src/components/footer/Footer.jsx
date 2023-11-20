import React from 'react';
import './footer.css';
import ME_IMG from "../../assets/moi-font-bleu.jpg";
import ISO_1 from "../../assets/iso.jpeg";
import ISO_2 from "../../assets/iso1.jpeg";
import ISO_3 from "../../assets/iso2.jpeg";

const Footer = () => {
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
          <span className="occupation">DEVELOPPEUR LOGICIEL</span>
        </div>
        <div className="contact">
          <div className="contact-infos">
            <div className="infos-content">
              <a href="#" className="contact-link"><i className="fa-solid fa-envelope"></i></a>
              <a href="#" className="contact-link"> <i className="fa-regular fa-paper-plane"></i></a>
              <a href="#" className="contact-link"><i className="fa-solid fa-mobile-screen-button"></i></a>
            </div>
            <div className="personnal-contact">
              <ul>
                <li>Téléphone: +33 7 45 17 88 05</li>
                <li>E-mail: tekofabricefolly@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            <form action="f">
              <input type="text" name="name" placeholder="Votre nom complet" />
              <input type="email" name="email" placeholder="Votre email" />
              <textarea name="message" placeholder="Votre message" cols="30" rows="10"></textarea>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
