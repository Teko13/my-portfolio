import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';
import IMG9 from '../../assets/portfolio9.png';
import IMG10 from '../../assets/portfolio10.png';
import IMG11 from '../../assets/portfolio11.png'


import { useState } from 'react';

const Portfolio = () => {
    const [category, setCategory] = useState("all");
    const projectsMap = [
        {
            img: IMG1,
            title: "Booki",
            gitSource: "https://github.com/Teko13/projet1",
            gitLive: "https://teko13.github.io/projet1/",
            category: ["html/css/js"]
        },
        {
            img: IMG2,
            title: "OmyFood",
            gitSource: "https://github.com/Teko13/projet2",
            gitLive: "https://teko13.github.io/projet2/",
            category: ["html/css/js"]
        },
        {
            img: IMG3,
            title: "Audit et optimisation SEO",
            gitSource: "https://github.com/Teko13/projet3",
            gitLive: "https://teko13.github.io/projet3/",
            category: ["html/css/js"]
        },
        {
            img: IMG4,
            title: "Kanap",
            gitSource: "https://github.com/Teko13/projet4",
            gitLive: "",
            category: ["react/js"]
        },
        {
            img: IMG5,
            title: "Hot Takes (API)",
            gitSource: "https://github.com/Teko13/projet5",
            gitLive: "",
            category: ["node"]
        },
        {
            img: IMG6,
            title: "Groupomania",
            gitSource: "https://github.com/Teko13/projet6.git",
            gitLive: "",
            category: ["react/js", "node"]
        },
        {
            img: IMG7,
            title: "CTECH",
            gitSource: "https://github.com/Teko13/CTECH",
            gitLive: "https://teko13.github.io/CTECH/",
            category: ["react/js"]
        },
        {
            img: IMG8,
            title: "ShoppyBay",
            gitSource: "https://github.com/Teko13/shoppybay",
            gitLive: "",
            category: ["php/symfony"]
        },
        {
            img: IMG9,
            title: "Nyrvanah",
            gitSource: "",
            gitLive: "http://nyrvanah.com",
            category: ["php/symfony", "html/css/js"]
        },
        {
            img: IMG10,
            title: "Les Etoiles sur le Podium",
            gitSource: "",
            gitLive: "http://assoc.nyrvanah.com",
            category: ["html/css/js"]
        },
        {
            img: IMG11,
            title: "Model pour Etablissement de santé",
            gitSource: "https://github.com/teko13/sante",
            gitLive: "https://teko13.github.io/sante",
            category: ["html/css/js"]
        },
    ];
    return (
        <section id='portfolio'>
            <h5>Mes</h5>
            <h2>Projets</h2>
            <div className="category">
                <h3 onClick={() => {
                    setCategory("all")
                }} className={category === 'all' ? "selected" : ""}>Tout</h3>
                <h3 onClick={() => {
                    setCategory("html/css/js")
                }} className={category === "html/css/js" ? "selected" : ""} >HTML/CSS/JS</h3>
                <h3 onClick={() => {
                    setCategory("react/js")
                }} className={category === "react/js" ? "selected" : ""} >React.js</h3>
                <h3 onClick={() => {
                    setCategory("node")
                }} className={category === "node" ? "selected" : ""} >Node.js</h3>
                <h3 onClick={() => {
                    setCategory("php/symfony")
                }} className={category === "php/symfony" ? "selected" : ""} >PHP/Symfony</h3>
            </div>
            <div className="container portfolio__container">
                {
                    projectsMap.map((project, index) => {
                        if (category === "all") {
                            return (
                                <article key={index} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={project.img} alt="project visual" />
                                    </div>
                                    <h3>{project.title}</h3>
                                    <div className="portfolio__links">
                                        {project.gitSource !== "" ? <a href={project.gitSource} className='btn' target='_blank'>Code source</a> : ""}
                                        {project.gitLive !== "" ? <a href={project.gitLive} className='btn btn-primary' target='_blank'>Live Demo</a> : ""}
                                    </div>

                                </article>
                            )
                        }
                        else if (project.category.find((cat) => cat === category)) {
                            return (
                                <article key={index} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={project.img} alt="project visual" />
                                    </div>
                                    <h3>{project.title}</h3>
                                    <div className="portfolio__links">
                                        {project.gitSource !== "" ? <a href={project.gitSource} className='btn' target='_blank'>Code source</a> : ""}
                                        {project.gitLive !== "" ? <a href={project.gitLive} className='btn btn-primary' target='_blank'>Live Demo</a> : ""}
                                    </div>

                                </article>
                            )

                        }
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;
