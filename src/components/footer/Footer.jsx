import React from 'react';
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import LOGO_IMG_TEXT_BLANC from "../../assets/logo_text_img_blanc.svg";
import { IoLogoTwitter } from 'react-icons/io';
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className="footer__logo">
                <img src={LOGO_IMG_TEXT_BLANC} alt="logo metaPress" />
            </a>
            <ul className="permalinks">
                <li><a href="#about">A propos de moi</a></li>
                <li><a href="#competences">Mes competences</a></li>
                <li><a href="#skills">Mes savoir-faire</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Mes coordonnées</a></li>
            </ul>
            {/* <div className="footer__socials">
                <a href="https://www.tiktok.com/@metapress0?_t=8dvCX1y6RGV&_r=1" target='_blank'><BsTiktok /></a>
                <a href="https://www.facebook.com/profile.php?id=100094334454502&mibextid=ZbWKwL" target='_blank'><FaFacebookF /></a>
                <a href="https://twitter.com/TekoFolly575148?t=mM0jNSo2w17L-7KctMXuAA&s=09" target='_blank'><IoLogoTwitter /></a>
            </div> */}
        </footer>
    );
};

export default Footer;
