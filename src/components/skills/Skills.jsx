import React, { useState } from 'react';
import './skills.css'
import Scrollspy from 'react-scrollspy';
import { BiCheck } from 'react-icons/bi';
import TypeString from '../auto_typing/TypeString';

const Skills = () => {
    const [displayContent, setDisplayContent] = useState(false);
    const handelScrollView = (sectionId) => {
        if (sectionId !== undefined) {
            setDisplayContent(true)
        }
    }
    return (
        <div>
            <Scrollspy items={['skills']} offset={-100} currentClassName='isCurrent' onUpdate={handelScrollView}>

                <section id='skills'>
                    <h5>Mes</h5>
                    <h2>Savoir - Faire</h2>
                    <div className="container skills__container">
                        <article className="skill">
                            <div className="skill__head">
                                <h3>Frontend</h3>
                            </div>
                            <ul className="skill__list">
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Intégration de maquettes."} typingdelay={100} /> : ""} </p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Sites WordPress."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Application Frontent (React / JS)."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Responsive Design."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Gestion des dépendances ."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Accessibilité."} typingdelay={100} /> : ""}</p>
                                </li>
                            </ul>
                        </article>
                        <article className="skill">
                            <div className="skill__head">
                                <h3>Backend</h3>
                            </div>
                            <ul className="skill__list">
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Gestion de bases de données."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"API RESTful."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Application Backend PHP / symfony / NodeJS."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Intégration de services tiers."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Authentification et autorisation."} typingdelay={100} /> : ""}</p>
                                </li>
                            </ul>
                        </article>
                        <article className="skill">
                            <div className="skill__head">
                                <h3>Autre</h3>
                            </div>
                            <ul className="skill__list">
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Analyse de besoins."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Conception de solution technique."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"Technique de référencement."} typingdelay={100} /> : ""}</p>
                                </li>
                                <li>
                                    <BiCheck className='skill__list-icon' />
                                    <p>{displayContent === true ? <TypeString text={"IAs Prompting."} typingdelay={100} /> : ""}</p>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
            </Scrollspy>
        </div>
    );
};

export default Skills;
