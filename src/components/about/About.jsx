import React from 'react';
import './about.css'
import Me from '../../assets/moi-font-bleu.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
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
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Diplôme</h5>
                            <small>Titre RNCP niveau 5 (bac+2)</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projets</h5>
                            <small>Pluisieur projet pro valider et soutenus</small>
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
                    <p>
                        Dans la suite logique de mon parcours de développeur et après avoir
                        validé un titre professionnel de niveau 5 de développeur web, je
                        recherche un poste d'alternant en développement d'application
                        PHP pour une durée de 2 ans dans le cadre de la formation
                        "Développeur d'Application PHP/Symfony" de OpenClassRooms.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Me Contacter</a>
                </div>
            </div>
        </section>
    );
};

export default About;