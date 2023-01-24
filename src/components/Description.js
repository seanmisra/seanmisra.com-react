import React from 'react';
import { FileWordOutlined, FilePdfOutlined} from '@ant-design/icons';
import resume from '../resources/Sean_Misra_Resume_Aug_2022.docx'
import { saveAs } from 'file-saver';
import './Description.css'

const Description = () => {
    
    function downloadResume() {
        saveAs(resume, "Sean_Misra_Resume.docx");
    }
    
    return(
        <div class="description-wrapper">
            <span>Hi, my name is Sean and I'm a software engineer. I am passionate about web engineering! Please feel free to check out some of my projects. My hobbies include travel, movies, science-fiction, and biking &nbsp;<span id="smiley-face">🙂</span></span>
            <span id="hashtags">#angular #react #PHP #java </span>

            <span onClick={downloadResume} id="resume-link">
                <span id="resume-no-space">Resume</span> &nbsp;
                <FilePdfOutlined />
            </span>
        </div>
    )
}

export default Description;