import React from 'react';
import About from './components/about/About';
import Bg from './components/bg/Bg';
import Competences from './components/competences/Competences';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Chat from './components/chat/Chat';
import Nav_temp from './components/Nav_temp/Nav_temp';

const App = () => {
    return (
        <div>
            <Bg />
            <Header />
            <About />
            <Competences />
            <Skills />
            <Portfolio />
            <Footer />
            <Nav />
            <Chat />
        </div>
    );
};

export default App;
