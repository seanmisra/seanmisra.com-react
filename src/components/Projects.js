import React from 'react';
import { Carousel } from 'antd';

const Projects = () => {
    return(
        <div class="projects-wrapper">
            <Carousel autoplay>
                <div>
                    Movie Picker
                </div>
                <div>
                    Supplement Guru
                </div>
                <div>
                    Java Coffee Shop
                </div>
            </Carousel>
        </div>
    )
}

export default Projects;