import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/Project';
import Container from '../components/Container';
import API from '../utils/Api'

export default function About() {
    const [projectState, setProjectState] = useState([])

    API.getProjects().then((results) => {
        const projects = results.data.projects;
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
                    />
                ))}
            </Container>
            <Footer />
        </div>
    )
}