import React from 'react';
import CTA from './CTA';
import './header.css'
import ME from '../../assets/moi-sans-font.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <section id='header'>
            <div className="container header__container">
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <h5>Hello Moi c'est</h5>
                <h1>Teko</h1>
                <h5 className="text-light">Developpeur Web</h5>
                <HeaderSocial />
                <CTA />
            </div>
            <div className="scroll-down">
                <a href="#footer" className="mouse-wrapper">
                    <span>Voir bas de page</span>
                    <span className='mouse'>
                        <span>wheel</span>
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Header;