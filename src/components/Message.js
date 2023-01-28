import React from 'react';
import { useEffect } from 'react';
import './Message.css'
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Message = () => {
    useEffect(() => {
        setTimeout(() => {
            const welcomeMessage = document.getElementById("welcome-message");
            welcomeMessage.style.opacity = 1;
            // setTimeout(() => {
            //     welcomeMessage.style.opacity = 0;
            // }, 15000)
        }, 0)
      });

    return(
        <> 
        <Card id="message-card">
            <span class="message-hidden" id="welcome-message">Thanks for visiting 🤝 sample projects are above. Feel free to email me at <span id="email-message">seanmisra30@gmail.com</span> or ask any questions to the chatbot built with Google's Dialogflow<span id="kommunicate-responsive"> and Kommunicate</span></span>
            <span id="robot-emoji">🤖</span>
        </Card>
        {/* <Card id="info-card">
            <span id="location">
                <FontAwesomeIcon id="location-icon" icon={faLocationDot} />
                Boston, MA
            </span>

            <span id="phone-number">
                <FontAwesomeIcon id="phone-icon" icon={faPhone} />
                +1-617-784-2828
            </span>
        </Card> */}
        </>
    )
}

export default Message;