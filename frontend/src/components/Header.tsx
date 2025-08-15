import React from "react";

export default function Header() {
    return (
        <header style={{ padding: '20px 0', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>MySite</h1>
                <nav>
                <a href="#" style={{ margin: '0 10px' }}>Home</a>
                <a href="#" style={{ margin: '0 10px' }}>Features</a>
                <a href="#" style={{ margin: '0 10px' }}>Contact</a>
                </nav>
            </div>
        </header>
    );
}
