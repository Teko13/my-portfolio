import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG2 from '../../assets/portfolio2.jpeg';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpeg';
import IMG6 from '../../assets/portfolio6.jpeg';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mes</h5>
            <h2>Projets</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Booki</h3>
                    <div className="portfolio__links">
                        <a href="https://github.com/Teko13/projet1" className='btn' target='_blank'>Code source</a>
                        <a href="https://teko13.github.io/projet1/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>

                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>OmyFood</h3>
                    <div className="portfolio__links">
                        <a href="https://github.com/Teko13/projet2" className='btn' target='_blank'>Code source</a>
                        <a href="https://teko13.github.io/projet2/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>

                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Audit et optimisation SEO</h3>
                    <div className="portfolio__links">
                        <a href="https://github.com/Teko13/projet3" className='btn' target='_blank'>Code source</a>
                        <a href="https://teko13.github.io/projet3/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>

                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Knap</h3>
                    <div className="portfolio__links">
                        <a href="https://github.com/Teko13/projet4" className='btn' target='_blank'>Code source</a>
                    </div>

                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Hot Takes</h3>
                    <div className="portfolio__links">
                        <a href="https://github.com/Teko13/projet5" className='btn' target='_blank'>Code source</a>
                    </div>

                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Groupomania</h3>
                    <div className="portfolio__links">
                        <a href="https://github.com/Teko13/projet6.git" className='btn' target='_blank'>Code source</a>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default Portfolio;