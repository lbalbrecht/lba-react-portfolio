import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <div>
            <Navbar className="justify-content-center" bg="light" expand="lg" fixed="bottom">
                <Navbar.Text>Copyright 2021, L. Albrecht</Navbar.Text>
            </Navbar>
        </div>
    )
}