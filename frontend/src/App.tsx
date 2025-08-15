import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <div className='container' style={{display: 'flex', gap: '20px', marginTop: '40px'}}>
                <Card title="Card 1" description="This is the first card." />
                <Card title="Card 2" description="This is the second card." />
                <Card title="Card 3" description="This is the third card." />
            </div>
        </div>
    );
}
