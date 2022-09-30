import React from 'react';
import CTA from './CTA';
import './header.css'
import ME from '../../assets/moi-sans-font.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header id='#header'>
            <div className="container header__container">
                <h5>Hello Moi c'est</h5>
                <h1>Teko</h1>
                <h5 className="text-light">Developpeur Web</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#footer" className="scroll__down">Aller au pied de page</a>
            </div>
        </header>
    );
};

export default Header;