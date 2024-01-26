import React, { useContext } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import "./nav.css";
import { GrPersonalComputer } from "react-icons/gr";
import { AiFillCode } from "react-icons/ai"
import { FiAtSign } from "react-icons/fi"
import { SiArtifacthub } from "react-icons/si"
import { ChatContext } from '../chat/ChatContext';
const Nav = () => {
    const { chat, setChat } = useContext(ChatContext);
    return (
        <div>
            <ul className="nav-list">
                <li className='nav-btn'><a href="#header"><AiOutlineHome /></a></li>
                <li className='nav-btn'><a href="#about"><AiOutlineUser /></a></li>
                <li className='nav-btn ai'><a href="#" onClick={() => setChat(!chat)}><SiArtifacthub /></a></li>
                <li className='nav-btn'><a href="#portfolio"><AiFillCode /></a></li>
                <li className='nav-btn'><a href="#footer"><FiAtSign /></a></li>
            </ul>

        </div>
    );
};

export default Nav;
