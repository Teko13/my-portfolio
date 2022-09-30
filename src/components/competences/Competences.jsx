import React from 'react';
import './competences.css'
import { BsPatchCheckFill } from 'react-icons/bs';

const Competences = () => {
    return (
        <section id='competences'>
            <h5>Mes Competences</h5>
            <h2>Technique</h2>
            <div className="container competences__container">
                <div className="competences__frontend">
                    <h3>Developpement Frontend</h3>
                    <div className="competences__content">
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>HTML</h4>
                                <small className='text-light'>Avancé</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>CSS</h4>
                                <small className='text-light'>Avancé</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>JavaScript</h4>
                                <small className='text-light'>Intermédiaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>SASS</h4>
                                <small className='text-light'>Intermédiaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>Boostrap</h4>
                                <small className='text-light'>Intermédiaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>React</h4>
                                <small className='text-light'>Junior</small></div>
                        </article>
                    </div>
                </div>
                <div className="competences__backend">
                    <h3>Developpement Backend</h3>
                    <div className="competences__content">
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>PHP</h4>
                                <small className='text-light'>Intermediaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>SQL</h4>
                                <small className='text-light'>Intermediaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>Node.js</h4>
                                <small className='text-light'>Junior</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>MySQL</h4>
                                <small className='text-light'>Intermédiaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>MongoDB</h4>
                                <small className='text-light'>Intermédiaire</small></div>
                        </article>
                        <article className="competences__details">
                            <BsPatchCheckFill className='competences__details-icon' />
                            <div><h4>Symfony</h4>
                                <small className='text-light'>Junior</small></div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competences;