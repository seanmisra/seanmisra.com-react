import logo from './logo.svg';
import './App.css';
import { Image } from 'antd';
import { Card, Avatar,  Button, message, Steps, theme } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Skills from './components/Skills.js'
import Chatbot from './components/Chatbot.js';
import Projects from './components/Projects';

const { Meta } = Card;

const steps = [
  {
    title: 'Skills',
    component: Skills,
  },
  {
    title: 'Projects',
    component: Projects
  },
  {
    title: 'Chat',
    component: Chatbot
  },
];

function loadComponent (componentName) {
  // component does exist
  if (typeof componentName !== "undefined") {
    return React.createElement(componentName, { });
  }
}


function App() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '40vh',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="App">
      <div class="content-wrapper">
        <div class="content-container">

          <div class="image-container">
            <Image 
              width={250}
              src={require("./resources/website_profile_photo.jpg")}
            />
          </div>

          <div class="bio-container">
            <Card
              style={{ width: "76vw", height: 256.5, fontSize: 26}} 
    
              actions={[
                <MailOutlined style={{ fontSize: '17px' }} key="email" />,
                <LinkedinOutlined style={{ fontSize: '17px'}} key="linkedin" />,
                <GithubOutlined style={{ fontSize: '17px' }} key="github" />,
              ]}
              >
              <Meta
                avatar={<Avatar size="large" src={require("./resources/avatar.jpg")} />}
                title="Hello!"
                description={"Hi, my name is Sean and I'm a software engineer. I am passionate about web engineering! Please feel free to check out some of my projects. My hobbies include travel, movies, science-fiction, and biking."}
              />
            </Card>
          </div>

        </div>
        
        <div class="steps-content">
          <Steps current={current} items={items} />
          <div style={contentStyle}> 
            { loadComponent(steps[current].component) }
          </div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
