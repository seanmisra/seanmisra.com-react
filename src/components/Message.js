import React from 'react';
import { useEffect } from 'react';
import './Message.css'
import { Card } from 'antd';


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
            <span class="message-hidden" id="welcome-message">Thanks for visiting 🤝 sample projects are above. Feel free to email me at <span id="email-message">seanmisra30@gmail.com</span> or ask any questions to the chatbot built with Google's Dialogflow and Kommunicate</span>
            <span id="robot-emoji">🤖</span>
        </Card>
        {/* </div> */}
        </>
    )
}

export default Message;