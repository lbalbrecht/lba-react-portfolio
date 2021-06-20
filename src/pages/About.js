import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Bio from "../components/Bio";

export default function About() {
    return (
        <div>
            <Header />
            <Container>
                <br></br>
                <Bio />
            </Container>
            <Footer />
        </div>
    )
}