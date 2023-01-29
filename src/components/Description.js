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
            <span>Hi, <strong id="intro-bold">my name is Sean and I'm a software engineer.</strong> I am passionate about web engineering!
                 I have been programming for 8 years with 5 years of work experience. My hobbies include travel, movies,
                   science-fiction, and yoga <span id="hashtags">#angular #react #javascript #PHP #java #aws #spring #rxjs
                    #bootstrap #ionic #python #node #scala #ag-grid #NLP #MEAN #MERN #LAMP #laravel #jenkins #docker</span>
                         
                <span class="resume-link" id="responsive-resume-link" onClick={downloadResume}>
                    <span id="resume-no-space">Resume</span> &nbsp;
                    <FilePdfOutlined />
                </span>
            </span>

            <span class="resume-link" onClick={downloadResume} id="resume-link">
                <span id="resume-no-space">Resume</span> &nbsp;
                <FilePdfOutlined />
            </span>
        </div>
    )
}

export default Description;