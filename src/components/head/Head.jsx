import React from 'react';
import { GiPalette } from "react-icons/gi";
import { TbLayoutGridAdd } from "react-icons/tb";
import "./head.css";

const Head = () => {
    return (
        <header className='container head-container'>
            <nav className='head__nav'>
                <a href="#">
                    <h2>Teko</h2>
                </a>
                <div className="nav__links">
                    <ul className="nav__list">
                        <li><a href="#About">A Propos de moi</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-btns">
                    <span className='palette-icon'><GiPalette /></span>
                    <div className='nav__toggle'>
                        <span className='toggle-btn'><TbLayoutGridAdd /></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Head;