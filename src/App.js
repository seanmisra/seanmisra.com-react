import logo from './logo.svg';
import './App.css';
import { Image } from 'antd';
import { Card, Avatar } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Meta } = Card;

function App() {
  return (
    <div className="App">

      
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
      


    </div>
  );
}

export default App;
