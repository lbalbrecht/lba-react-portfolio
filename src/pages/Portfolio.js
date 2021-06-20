import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/Project';
import Container from '../components/Container';
// import API from '../utils/Api'

export default function Portfolio() {

    // const [projectState, setProjectState] = useState([])

    // API.getProjects().then((results) => {
    //     console.log(results.data)
    //     const projects = results.data;
    //     console.log(projects)
    //     setProjectState(projects)
    // })

    return (
        <div>
            <Header />
            <Container>
                {/* {projectState.map((project, index) => (
                    ))} */}
                    <br></br>
                    <ProjectCard
                        projectName="Plant Baby"
                        snapshot="../../../public/snapshots/plant-baby"
                        projectDescription="Cooking is not always easy; for many of us who lead busy lives, it can be a challenge to use the food in the fridge before it expires. Whether it's because of a time constraint or a lack of motivation, the process of cooking a meal can be a hassle. This can lead to unnecessary food waste as well as money wasted on food that goes uneaten. Check Your Fridge creates a database of food that you have in your fridge. Using Spoonacular API, you can find recipes that use specific ingredients to help you use your food before it expires"
                        projectRepo="https://github.com/lbalbrecht/plant-baby-frontend"
                        url="https://plantbaby.herokuapp.com"
                    />
                    <br></br>
                    <ProjectCard
                        projectName="Check Your Fridge"
                        snapshot="C:/Users/leigh/bootcamp/homework2/lba-react-portfolio/public/snapshots/"
                        projectDescription="Cooking is not always easy; for many of us who lead busy lives, it can be a challenge to use the food in the fridge before it expires. Whether it's because of a time constraint or a lack of motivation, the process of cooking a meal can be a hassle. This can lead to unnecessary food waste as well as money wasted on food that goes uneaten. Check Your Fridge creates a database of food that you have in your fridge. Using Spoonacular API, you can find recipes that use specific ingredients to help you use your food before it expires"
                        projectRepo="https://github.com/lbalbrecht/check-your-fridge"
                        url="https://cryptic-shore-39350.herokuapp.com/"
                    />
                    <br></br>
                    <ProjectCard
                        projectName="GearWise"
                        snapshot="C:/Users/leigh/bootcamp/homework2/lba-react-portfolio/public/snapshots/gearwise"
                        projectDescription="GearWise is an application for backpackers and campers to log and store their gear, record trips, and ensure that their load isn't too heavy to carry. After a year of isolation and quarantine, many of us are itching to get outside and stretch our legs. GearWise will help users ensure that their trip is successful. Nothing ruins a trip quite like realizing you've forgotten something or that you're carrying more than you can handle."
                        projectRepo="https://github.com/lbalbrecht/gear-tracker"
                        url="https://gear-wise.herokuapp.com/"
                    />
                    <br></br>
                    <ProjectCard
                        projectName="re:Analysis"
                        snapshot="C:/Users/leigh/bootcamp/homework2/lba-react-portfolio/public/snapshots/reanalysis"
                        projectDescription="Emails are an integral part of professional and business operations; however, a significant amount of subtext is lost in a written message, particularly the tone of the message itself. This can present challenges when an employee unintentionally sends an email that the recipient could interpret negatively or combatively. Cloud Natural Language is an API that analyzes language and provides information about the perceived tone of the message through a machine-learning-derived understanding of colloquial speech."
                        projectRepo="https://github.com/lbalbrecht/pro-communication-analysis"
                        url="https://gear-wise.herokuapp.com/"
                    />
                    <br></br>
                    <ProjectCard
                        projectName="Quarantine and Chill"
                        snapshot="C:/Users/leigh/bootcamp/homework2/lba-react-portfolio/public/snapshots/quarantine-and-chill"
                        projectDescription="Cooking is not always easy; for many of us who lead busy lives, it can be a challenge to use the food in the fridge before it expires. Whether it's because of a time constraint or a lack of motivation, the process of cooking a meal can be a hassle. This can lead to unnecessary food waste as well as money wasted on food that goes uneaten. Check Your Fridge creates a database of food that you have in your fridge. Using Spoonacular API, you can find recipes that use specific ingredients to help you use your food before it expires"
                        projectRepo="https://github.com/lbalbrecht/lst-night-planner"
                        url="https://lbalbrecht.github.io/lst-night-planner/"
                    />
                    <br></br>
                    <ProjectCard
                        projectName="Tech Blog"
                        snapshot="C:/Users/leigh/bootcamp/homework2/lba-react-portfolio/public/snapshots/tech-blog"
                        projectDescription="Tech is one of the largest and fastest-growing industries in the world. From computers to phones to kitchen appliances, tech has shaped how we live and how we interact with one another. It's only natural that communities would build around such an integral part of our lives. Blogs have long existed as a way for users to interact with one another and connect over a shared interest. This application brings the user a site that will allow them to connect with other tech enthusiasts!"
                        projectRepo="https://github.com/lbalbrecht/lba-tech-blog"
                        url="https://lba-techblog.herokuapp.com/"
                    />
                    <br></br>
                    <br></br>
                    <br></br>
            </Container>
            <Footer />
        </div>
    )
}