import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Carbon Footprint Calculator. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { background: '#2c3e50', color: 'white', textAlign: 'center', padding: '20px', marginTop: '40px' }
};

export default Footer;
