import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
import './Projects.css'
import { GithubOutlined } from '@ant-design/icons';


const Projects = () => {
    function githubAction() {
        window.open("https://github.com/seanmisra", '_blank');
      }

    return(
        <div class="projects-wrapper">
            <Carousel>
                <div class="carousel-wrapper">
                    <Image 
                        id="movie-picker-image"
                        width={600}
                        src={require("../resources/Movie_Picker_Screenshot_3.png")}
                    />

                    <div class="carousel-description">
                        <h3>Movie Picker</h3>
                        <p>MEAN Stack, Angular Material, omdbAPI |</p>
                        <p>The movie picker allows you to pick up to three movies and get a movie recommendation based on your preferences. The recommendation algorithm is based on tag-metadata, while the enriched movie data comes from omdbAPI.</p>
                        <GithubOutlined id="demo-github" onClick={githubAction}></GithubOutlined>
                    </div>
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