import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="card" style={styles.hero}>
        <h1>Welcome to Carbon Footprint Calculator</h1>
        <p>Track and reduce your environmental impact with our easy-to-use calculator.</p>
        <div style={styles.buttons}>
          <Link to="/register"><button>Get Started</button></Link>
          <Link to="/about"><button style={styles.secondaryBtn}>Learn More</button></Link>
        </div>
      </div>
      <div className="card">
        <h2>Why Calculate Your Carbon Footprint?</h2>
        <p>Understanding your carbon footprint is the first step toward reducing your environmental impact and contributing to a sustainable future.</p>
      </div>
    </div>
  );
};

const styles = {
  hero: { textAlign: 'center', padding: '40px 20px' },
  buttons: { marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' },
  secondaryBtn: { background: '#3498db' }
};

export default Home;
