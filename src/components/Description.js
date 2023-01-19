import React from 'react';
import { FileWordOutlined } from '@ant-design/icons';
import resume from '../resources/Sean_Misra_Resume_Aug_2022.docx'
import { saveAs } from 'file-saver';

const Description = () => {
    
    function downloadResume() {
        saveAs(resume, "Sean_Misra_Resume.docx");
    }
    
    return(
        <div>
            Hi, my name is Sean and I'm a software engineer. I am passionate about web engineering! Please feel free to check out some of my projects. My hobbies include travel, movies, science-fiction, and biking &nbsp;<span id="smiley-face">🙂</span>
            <br/>
            <br/>
            <span onClick={downloadResume} id="resume-link"><span id="resume-no-space">Resume</span>&nbsp;<FileWordOutlined /></span>

            <div class="emojis">
                {/* <span id="emoji-one">
                    🙂
                </span>
                
                {/* <span id="emoji-two">
                    😎
                </span>
                <span id="emoji-two">
                    🥸
                </span>
                <span id="emoji-three">
                    🤯
                </span>
                <span id="emoji-four">
                    🇮🇳
                </span>
                <span id="emoji-four">
                    ☕
                </span> */}


            </div>
        </div>
    )
}

export default Description;