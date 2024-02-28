// components/About.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
function About() {
    return (
        <div>
            <Header />
            <Nav />
            <h2>About Us</h2>
            <p>Learn more about our company.</p>
            <Footer />
        </div>
    );
}

export default About;
