import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
import './Projects.css'
import { GithubOutlined } from '@ant-design/icons';


const Projects = () => {
    function githubActionSupplementGuru() {
        window.open("https://github.com/seanmisra/supplement-guru", '_blank');
    }

    function githubActionMoviePicker() {
        window.open("https://github.com/seanmisra/movie-picker", '_blank');
    }

    return(
        <div class="projects-wrapper">
            <Carousel>
                <div class="carousel-wrapper">
                    <Image 
                        class="project-demo-image"
                        width={600}
                        src={require("../resources/Movie_Picker_Screenshot_3.png")}
                    />

                    <div class="carousel-description">
                        <h3>Movie Picker</h3>
                        <p>MEAN Stack, Angular Material, omdbAPI |</p>
                        <p>The Movie Picker allows you to pick up to three movies and get a movie recommendation based on your preferences. The recommendation algorithm is based on tag-metadata, while the enriched movie data comes from omdbAPI.</p>
                        <GithubOutlined id="demo-github" onClick={githubActionMoviePicker}></GithubOutlined>
                    </div>
                </div>

                <div class="carousel-wrapper">
                    <Image 
                        class="project-demo-image"
                        width={600}
                        src={require("../resources/Supplement_Guru_Screenshot.png")}
                    />

                    <div class="carousel-description">
                        <h3>Supplement Guru</h3>
                        <p>MERN Stack, MUI |</p>
                        <p>The Supplement Suru gives you supplement recommendations based on user-entered tags. A user can enter one or multiple tags, which the algorithm uses to determine a recommendation.</p>
                        <GithubOutlined id="demo-github" onClick={githubActionSupplementGuru}></GithubOutlined>
                    </div>    
                </div>

                <div>
                    Java Coffee Shop
                </div>
            </Carousel>
        </div>
    )
}

export default Projects;