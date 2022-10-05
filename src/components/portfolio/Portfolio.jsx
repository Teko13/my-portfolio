import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG2 from '../../assets/portfolio2.jpeg';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpeg';
import IMG6 from '../../assets/portfolio6.jpeg';

const Portfolio = () => {
    const projectsMap = [
        {
            img: IMG1,
            title: "Booki",
            gitSource: "https://github.com/Teko13/projet1",
            gitLive: "https://teko13.github.io/projet1/"
        },
        {
            img: IMG2,
            title: "OmyFood",
            gitSource: "https://github.com/Teko13/projet2",
            gitLive: "https://teko13.github.io/projet2/"
        },
        {
            img: IMG3,
            title: "Audit et optimisation SEO",
            gitSource: "https://github.com/Teko13/projet3",
            gitLive: "https://teko13.github.io/projet3/"
        },
        {
            img: IMG4,
            title: "Kanap",
            gitSource: "https://github.com/Teko13/projet4",
            gitLive: ""
        },
        {
            img: IMG5,
            title: "Hot Takes",
            gitSource: "https://github.com/Teko13/projet5",
            gitLive: ""
        },
        {
            img: IMG6,
            title: "Groupomania",
            gitSource: "https://github.com/Teko13/projet6.git",
            gitLive: ""
        },
    ];
    return (
        <section id='portfolio'>
            <h5>Mes</h5>
            <h2>Projets</h2>
            <div className="container portfolio__container">
                {
                    projectsMap.map((project, index) => (
                        <article key={index} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={project.img} alt="project visual" />
                            </div>
                            <h3>{project.title}</h3>
                            <div className="portfolio__links">
                                <a href={project.gitSource} className='btn' target='_blank'>Code source</a>
                                {project.gitLive !== "" ? <a href={project.gitLive} className='btn btn-primary' target='_blank'>Live Demo</a> : ""}
                            </div>

                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;