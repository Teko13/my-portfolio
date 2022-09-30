import React from 'react';
import About from './components/about/About';
import Bg from './components/bg/Bg';
import Competences from './components/competences/Competences';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigations from './components/navigations/Navigations';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => {
    return (
        <div>
            <Bg />
            <Header />
            <Navigations />
            <About />
            <Competences />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;