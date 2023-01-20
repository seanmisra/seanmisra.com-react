import logo from './logo.svg';
import './App.css';
import { Image } from 'antd';
import { Card, Avatar,  Button, message, Steps, theme } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Skills from './components/Skills.js'
import Chatbot from './components/Chatbot.js';
import Projects from './components/Projects';
import Description from './components/Description';
import Footer from './components/Footer';

const { Meta } = Card;

const steps = [
  {
    title: 'Projects',
    component: Projects
  },
  {
    title: 'Skills',
    component: Skills,
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

function linkedinAction() {
  window.open("https://www.linkedin.com/in/seanmisra", '_blank');
}

function githubAction() {
  window.open("https://github.com/seanmisra", '_blank');
}

function mailAction() {
  window.open("mailto:seanmisra30@gmail.com", '_blank');
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
              src={require("./resources/website_profile_photo_2.jpg")}
            />
          </div>

          <div class="bio-container">
            <Card
              style={{ height: 256.5, fontSize: 26}} 
    
              actions={[
                <MailOutlined onClick={mailAction} style={{ fontSize: '17px' }} key="email" />,
                <LinkedinOutlined onClick={linkedinAction} style={{ fontSize: '17px'}} key="linkedin" />,
                <GithubOutlined onClick={githubAction} style={{ fontSize: '17px' }} key="github" />,
              ]}
              >
              <Meta
                avatar={<Avatar size="large" src={require("./resources/avatar.jpg")} />}
                title="Hello!"
                description={<Description/>}
              />
            </Card>
          </div>

        </div>
        
        <div class="steps-content">
          <Steps current={current} items={items} />
          <div style={contentStyle} class="steps-wrapper"> 
            { loadComponent(steps[current].component) }
          </div>
          <div style={{ marginTop: 13 }}>
            {current < steps.length - 1 && (
              <Button id="next-button" type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button id="done-button" type="primary" onClick={() => message.success('Thanks for visiting!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button id="previous-button" style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>   

      <Footer></Footer> 
    </div>
  );
}

export default App;
