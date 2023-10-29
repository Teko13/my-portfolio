import './typing.css';
import React, { useState, useEffect } from 'react';

const TypeString = ({ text, typingdelay = 100 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const typeString = () => {
            if (currentIndex < text.length) {
                setCurrentText((prevCurrentText) => prevCurrentText + text[currentIndex]);
                setCurrentIndex((prevCureentIndex) => prevCureentIndex + 1)
            }
        };
        const typingTimer = setInterval(typeString, typingdelay);

        return () => {
            clearInterval(typingTimer)
        }
    }, [currentIndex, text, typingdelay])

    return (
        <>
            <span className="text-content">{currentText}</span>
            <span className={currentIndex < text.length ? "cursor" : "cursor disabled"}></span>
        </>
    );
};

export default TypeString;
