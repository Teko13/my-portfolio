import React, { useState } from 'react';
import './navigation.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Navigations = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#competences" onClick={() => setActiveNav('#competences')}
                className={activeNav === '#competences' ? 'active' : ''}><BiBook /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills')}
                className={activeNav === '#skills' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Navigations;