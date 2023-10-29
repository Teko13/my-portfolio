import React, { useState } from 'react';
import './about.css'
import Me from '../../assets/moi-font-bleu.jpg'
import { FaAward } from 'react-icons/fa';
import TypeString from '../auto_typing/TypeString';
import Scrollspy from 'react-scrollspy';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    const [displayContent, setDisplayContent] = useState(false);
    const handelScrollView = (sectionId) => {
        if (sectionId !== undefined) {
            setDisplayContent(true)
        }
    }
    const PresentationText = "Dans l'ombre des octets, notre monde s'invente. Ma curiosité et ma créativité m'obligent, je ne peux qu'être acteur de cet orchestre qui épouse les possibilités de demain. Les projets ambitieux sont ce qui convertit le futur en présent. Quelle que soit leur nature, ils n'échapperont pas à cet orchestre où les 0 et 1 font la loi dans les partitions. Étant un harmoniste qui saurait harmoniser vos besoins avec grande habileté, je vous propose de composer ensemble !";
    return (
        <div>
            <Scrollspy items={['about']} offset={-100} currentClassName='isCurrent' onUpdate={handelScrollView} >
                <section id='about'>
                    <h5>À Propos</h5>
                    <h2>De Moi</h2>

                    <div className="container about__container">
                        <div className="about__me">
                            <div className="about__me-image">
                                <img src={Me} alt="Ma foto" />
                            </div>
                        </div>
                        <div className="about__content">
                            <div className="resume">
                                <p>
                                    {displayContent === true ? <TypeString text={PresentationText} typingdelay={30} /> : ''}
                                </p>
                                <a href="#contact" className='btn btn-primary'>Me Contacter</a>
                            </div>
                            <div className="skills">
                                <div className="backend">
                                    <div className="skills-title">
                                        <h3>Backend</h3>
                                        <h5>75%</h5>
                                    </div>
                                    <div className="bar">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="frontend">
                                    <div className="skills-title">
                                        <h3>Frontend</h3>
                                        <h5>90%</h5>
                                    </div>
                                    <div className="bar">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                <div className="unix">
                                    <div className="skills-title">
                                        <h3>System Unix</h3>
                                        <h5>55%</h5>
                                    </div>
                                    <div className="bar">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Diplômes</h5>
                            <small>Titre RNCP niveau 5 (bac+2)</small><br />
                            <small>10+ Certifications</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projets</h5>
                            <small>Pluisieur projets déjà bouclés</small>
                            <small>Dans divers technologies et thématique</small>
                        </article>
                        <article className="about__card">
                            <FiUser className='about__icon' />
                            <h5>Soft skills</h5>
                            <small>
                                <ul>
                                    <li>Autonomie</li>
                                    <li>Curiosité</li>
                                    <li>Rigueur</li>
                                    <li>Persévérance</li>
                                </ul>
                            </small>
                        </article>
                    </div>
                </section>
            </Scrollspy>
        </div>
    );
};

export default About;
