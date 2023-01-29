import React from 'react';
import './Funfact.css';
import { Button, message } from 'antd';

const Funfact = () => {
    const [messageApi, contextHolder] = message.useMessage();

    // move somewhere else once you have more
    const funFacts = [
        "Did you know Java 19 was released in September 2022?",
        "Did you know Angular 14 was released in June of 2022?",
        "Did you know there is a programming language written fully in emojis, Emojicode?"
    ]

    const getFunFact = () => {
        const funFactLength = funFacts.length;
        const randomNumber = Math.floor(Math.random() * funFactLength) + 1
        const chosenFact = funFacts[randomNumber - 1];

        messageApi.open({
            type: 'info',
            content: chosenFact,
            duration: 5,
            style: {
                marginTop: '85vh',
                fontSize: '14px',
                fontWeight: '600'
            }
        });            
      };

    return (
        <div class="fun-fact-wrapper">
            {contextHolder}
            <Button onClick={getFunFact} type="primary">Fun Fact</Button>
        </div>
    )
}

export default Funfact;