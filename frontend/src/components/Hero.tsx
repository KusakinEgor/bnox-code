import React from 'react';

export default function Hero() {
  return (
    <section style={{ padding: '80px 0', textAlign: 'center', backgroundColor: '#4f46e5', color: 'white' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to MySite</h1>
      <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto 30px' }}>
        Build beautiful interfaces quickly with React + Vite.
      </p>
      <button style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: 'white', color: '#4f46e5', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Get Started
      </button>
    </section>
  );
}
