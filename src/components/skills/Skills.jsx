import React from 'react';
import './skills.css'
import { BiCheck } from 'react-icons/bi';

const Skills = () => {
    return (
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
                            <p>Intégration de maquette.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Dynamiser des pages web avec des animations CSS moderne.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Produire du code CSS avec SASS.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Exploiter des APIs avec Javascript.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Utiliser les fondamentaux du framwork React (composants,
                                props, useState hook) pour concevoir des applications à page unique (SPA).</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Implémenter des fonctionnalités de contact rapide sur les pages avec emailJS.</p>
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
                            <p>Ecrire des pages web dynamique avec PHP.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>PHP orienté objet.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Effectuer des requêtes SQL.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Concevoir un API REST avec node.js/Express et implémenter tout les opeérations CRUD.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Exploiter des bases de données SQL tel que MySQL.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Exploiter des bases de données noSQL tel que MongoDB</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Concevoir des applications Symfony basique</p>
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
                            <p>Organiser des fichier sous pattern MVC.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Organier les fichiers sous pattern 7-1.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Gerer du code avec git et github.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Réaliser un audit SEO.</p>
                        </li>
                        <li>
                            <BiCheck className='skill__list-icon' />
                            <p>Appliquer les bonnes pratiques pour l'optimisation du
                                du référencement naturel.
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Skills;