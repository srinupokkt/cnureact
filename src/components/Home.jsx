// components/Home.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
function Home() {
    return (
        <div>
            <Header />
            <Nav />
            <h2>Home</h2>
            <p>Welcome to our website!</p>
            <Footer />
        </div>
    );
}

export default Home;
