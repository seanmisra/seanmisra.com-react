import React from 'react';
import { FilePdfOutlined} from '@ant-design/icons';
import resume from '../resources/Sean_Misra_Resume_2023.pdf'
import { saveAs } from 'file-saver';
import './Description.css'

const Description = () => {
    
    function downloadResume() {
        saveAs(resume, "Sean_Misra_Resume.pdf");
    }
    
    return(
        <div class="description-wrapper">
            <span>Hi, my name is Sean and I'm a software engineer. I am passionate about web engineering!
                 I have been programming for 8 years with 5 years of work experience. My hobbies include travel, movies,
                   science-fiction, and yoga <span id="hashtags">#angular #react #PHP8 #java </span>
                   
                   </span>

            <span onClick={downloadResume} id="resume-link">
                <span id="resume-no-space">Resume</span> &nbsp;
                <FilePdfOutlined />
            </span>
        </div>
    )
}

export default Description;