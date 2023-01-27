import './App.css';
import { Image } from 'antd';
import { Card, Avatar,  Button, message, Steps, theme } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Skills from './components/Skills.js'
import Projects from './components/Projects';
import Description from './components/Description';
import Footer from './components/Footer';
import KommunicateChat from './chat';

const { Meta } = Card;


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

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="App">
      <KommunicateChat></KommunicateChat>
      <div class="content-wrapper">
        <div class="content-container">

          <div class="image-container">
            <Image 
              width={226}
              src={require("./resources/profile_pic_blue.jpg")}
            />
          </div>

          <div class="bio-container">
            <Card
              style={{ height: 232.5, fontSize: 26}} 
    
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
          <div style={contentStyle} class="steps-wrapper"> 
            <Projects></Projects>
          </div>
        </div>
      </div>   

      <Footer></Footer> 
    </div>
  );
}

export default App;
