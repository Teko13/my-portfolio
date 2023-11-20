import React, { useState } from 'react';
import "./chat.css";
import {FaWindowClose} from "react-icons/fa";

const Chat = () => {
    const [chat, setChat] = useState(false);
    return (
        <div className={chat && "chat-body" || !chat && "chat-body close"}>
            <div className="chat-container">
                <button className="close" onClick={() => setChat(true)}><FaWindowClose /></button>
        <h3>Chat</h3>
        <div className="chat" id="chat">
            <div className="msg-container">
                <div className="user-msg">message de l'utilisateur</div>
            </div>
            <div className="msg-container">
                <div className="bot-msg">Message du bot</div>
            </div>
        </div>
        <div className="form">
            <input id="input" type="text" />
            <button id="btn">Envoyer</button>
        </div>
    </div>
        </div>
    );
};

export default Chat;