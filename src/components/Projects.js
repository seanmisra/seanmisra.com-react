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

    function githubActionCoffeeShop() {
        window.open("https://github.com/seanmisra/java-coffee-spring", '_blank');
    }

    function githubActionFlashcardDepot() {
        window.open("https://github.com/seanmisra/flashcard-depot", '_blank');
    }

    function openMoviePicker() {
        window.open("http://ec2-44-203-118-224.compute-1.amazonaws.com/", '_blank');
    }

    function openSupplementGuru() {
        window.open("http://ec2-44-211-144-103.compute-1.amazonaws.com/", '_blank');
    }

    function openFlashcardDepot() {
        window.open("http://18.212.189.89:8080/index.php", '_blank');
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
                        <p>The Movie Picker allows you to pick up to three movies and get a movie recommendation based on your preferences.
                             The recommendation algorithm is based on tag-metadata, while the enriched movie data comes from omdbAPI.&nbsp;
                            <span class="live-demo" onClick={openMoviePicker}>Visit</span>
                             </p>
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
                        <p>The Supplement Suru gives you supplement recommendations based on user-entered tags.
                             A user can enter one or multiple tags, which the algorithm uses to determine a recommendation.&nbsp;
                             <span class="live-demo" onClick={openSupplementGuru}>Visit</span>
                             </p>
                        <GithubOutlined id="demo-github" onClick={githubActionSupplementGuru}></GithubOutlined>
                    </div>    
                </div>

                <div class="carousel-wrapper">
                    <Image 
                        class="project-demo-image"
                        width={600}
                        src={require("../resources/Java_Coffee_Shop.png")}
                    />

                    <div class="carousel-description">
                        <h3>Java Coffee Shop</h3>
                        <p>Angular 15, Spring Boot, MySQL |</p>
                        <p>A project to practice Spring Boot REST APIs. The Java Coffee Shop sells food, drinks,
                             and allows the user to create an account and login&nbsp;
                             {/* <span class="live-demo" onClick={openMoviePicker}>Visit</span> */}
                             </p>
                        <GithubOutlined id="demo-github" onClick={githubActionCoffeeShop}></GithubOutlined>
                    </div>   
                </div>

                <div class="carousel-wrapper">
                    <Image 
                        class="project-demo-image"
                        width={600}
                        src={require("../resources/Flashcard_Depot_Screenshot.png")}
                    />

                    <div class="carousel-description">
                        <h3>Flashcard Depot</h3>
                        <p>PHP 8, Docker, Nginx, MySQL |</p>
                        <p>Flashcard Depot allows users to create, favorite, and study flashcards.
                             The project was deployed via a Docker container and Docker Compose.&nbsp;
                             <span class="live-demo" onClick={openFlashcardDepot}>Visit</span>
                             </p>
                        <GithubOutlined id="demo-github" onClick={githubActionFlashcardDepot}></GithubOutlined>
                    </div>   
                </div>
            </Carousel>
        </div>
    )
}

export default Projects;