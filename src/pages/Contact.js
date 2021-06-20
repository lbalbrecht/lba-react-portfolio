import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <div>
            <Header />
            <br></br>
            <Container>
                <ContactForm />
            </Container>
            <Footer />
        </div>
    )
}