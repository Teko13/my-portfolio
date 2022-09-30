import React from 'react';
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io'
import LOGO from '../../assets/mon-logo.svg';

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className="footer__logo">Teko</a>
            <ul className="permalinks">
                <li><a href="#about">A propos de moi</a></li>
                <li><a href="#competences">Mes competences</a></li>
                <li><a href="#skills">Mes savoir-faire</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Mes coordonnées</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/Parlons-Techs-104050835687569/" target='_blank'><FaFacebookF /></a>
                <a href="https://www.instagram.com/tekofabricefolly/" target='_blank'><FiInstagram /></a>
                <a href="https://twitter.com/TekoFabriceF" target='_blank'><IoLogoTwitter /></a>
            </div>
        </footer>
    );
};

export default Footer;