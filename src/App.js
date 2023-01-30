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
import Message from './components/Message';
import { SkillChart } from './components/SkillChart';
import Funfact from './components/Funfact';

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
    // backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 15,
  };

  return (    
    <div className="App">
      <KommunicateChat></KommunicateChat>
      <div class="content-wrapper">
        <div class="content-container">

          <div id="image-frame">
            <div class="image-container">
              <Image 
                id="profile-pic-blue"
                width={210}
                src={require("./resources/profile_pic_blue.jpg")}
              />
            </div>
          </div>

          <div class="bio-container">
            <Card
              style={{ height: 200, fontSize: 26}} 
    
              actions={[
                <MailOutlined onClick={mailAction} style={{ fontSize: '17px' }} key="email" />,
                <LinkedinOutlined onClick={linkedinAction} style={{ fontSize: '17px'}} key="linkedin" />,
                <GithubOutlined onClick={githubAction} style={{ fontSize: '17px' }} key="github" />,
              ]}
              >
              <Meta
                avatar={<Avatar size="large" src={require("./resources/avatar.jpg")} />}
                title="Hi!"
                description={<Description/>}
              />
            </Card>
          </div>

        </div>
        
       <Card id="project-card">
            {/* Test */}
        <Projects></Projects>
       </Card>

        {/* <div class="steps-content">
          <div style={contentStyle} class="steps-wrapper"> 
          </div>
        </div> */}
      </div>
      <Message></Message>
      <Funfact></Funfact>   
      <SkillChart></SkillChart>
      <Footer></Footer> 
    </div>
  );
}

export default App;
