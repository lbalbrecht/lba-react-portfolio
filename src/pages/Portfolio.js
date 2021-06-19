import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/Project';
import Container from '../components/Container';
import API from '../utils/Api'

export default function Portfolio() {

    const [projectState, setProjectState] = useState([])

    API.getProjects().then((results) => {
        console.log(results.data)
        const projects = results.data;
        console.log(projects)
        setProjectState(projects)
    })

    return (
        <div>
            <Header />
            <Container>
                {projectState.map((project, index) => (
                    <ProjectCard
                        projectName={project.title}
                        snapshot={project.snapshot}
                        projectDescription={project.description}
                        projectRepo={project.repository}
                        url={project.url}
                    />
                ))}
            </Container>
            <Footer />
        </div>
    )
}