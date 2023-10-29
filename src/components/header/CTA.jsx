import React from 'react';
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn btn-primary'>Télécharger mon CV</a>
            <a href="#contact" className='btn'>Mes Coordonnés</a>
        </div>
    );
};

export default CTA;
