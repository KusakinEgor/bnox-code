import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
    return (
        <div style={{ backgroundColor: "#0f1117", color: "white", minHeight: "100vh" }}>
            <Header />
            <Hero />
            <Body />
            <Footer />
        </div>
    );
}
