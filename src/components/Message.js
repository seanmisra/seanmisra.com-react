import React from 'react';
import { useEffect } from 'react';
import './Message.css'

const Message = () => {
    useEffect(() => {
        setTimeout(() => {
            const welcomeMessage = document.getElementById("welcome-message");
            welcomeMessage.style.opacity = 1;
            setTimeout(() => {
                welcomeMessage.style.opacity = 0;
            }, 15000)
        }, 5000)
      });

    return(
        <> 
        <div class="welcome-wrapper">
            <span class="message-hidden" id="welcome-message">Thanks for visiting 🤝 Sample projects are above. Feel free to email me at <span id="email-message">seanmisra30@gmail.com</span> or ask any questions to the chatbot built with Dialogflow</span>
        </div>
        </>
    )
}

export default Message;