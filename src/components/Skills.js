import React from 'react';
import './Skills.css';
import { Tag } from 'antd';
import { Html5Outlined } from '@ant-design/icons';

const Skills = () => {
    return(
        <>
            <div class="timeline-wrapper">
                
                <div class="timeline-bubbles-wrapper">
                    <div id="time-bubble-one-wrapper">
                        <div id="timeline-bubble-one" class="timeline-bubble">
                            <span class="timeline-year" id="timeline-year-one">
                                2015
                            </span>
                        </div>
                    </div>

                    <div id="time-bubble-two-wrapper">
                        <div id="timeline-bubble-two" class="timeline-bubble">
                            <span class="timeline-year" id="timeline-year-two">
                                2016
                            </span>
                        </div>
                    </div>

                    <div id="time-bubble-three-wrapper">
                        <div id="timeline-bubble-three" class="timeline-bubble">
                            <span class="timeline-year" id="timeline-year-three">
                                2017
                            </span>
                        </div>
                    </div>

                    <div id="time-bubble-four-wrapper">
                        <div id="timeline-bubble-four" class="timeline-bubble">
                            <span class="timeline-year" id="timeline-year-four">
                                2018
                            </span>
                        </div>
                    </div>

                    <div id="time-bubble-five-wrapper">
                        <div id="timeline-bubble-five" class="timeline-bubble">
                            <span class="timeline-year" id="timeline-year-five">
                                2020
                            </span>
                        </div>
                    </div>

                    <div id="time-bubble-six-wrapper">
                        <div id="timeline-bubble-six" class="timeline-bubble">
                            <span class="timeline-year" id="timeline-year-six">
                                2022 
                            </span>
                        </div>
                    </div>
                </div>

                <div class="skills-tags-wrapper">
                    <div class="left-icons-wrapper">
                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-one">
                            <Tag color="white">HTML</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-two">
                            <Tag color="white">CSS</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-three">
                            <Tag color="white">Wordpress</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-four">
                            <Tag color="white">C++</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-five">
                            <Tag color="white">PHP</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-six">
                            <Tag color="white">Angular</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-seven">
                            <Tag color="white">Java</Tag>
                        </div>
                    </div>


                    <div class="right-icons-wrapper">
                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-eight">
                            <Tag color="white">Spring</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-nine">
                            <Tag color="white">AWS</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-ten">
                            <Tag color="white">Python</Tag>
                        </div>

                        <div class="skill-tag-wrapper" id="skill-tag-wrapper-eleven">
                            <Tag color="white">React</Tag>
                        </div>
                    </div>
                </div>

                <hr id="timeline-line"></hr>
            </div>
        </>
    )
}

export default Skills;