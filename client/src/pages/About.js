import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>About Carbon Footprint Calculator</h1>
        <p>This application helps you calculate and track your carbon footprint based on your daily activities.</p>
        <h3>Features:</h3>
        <ul>
          <li>Calculate carbon emissions from electricity, transportation, fuel, and diet</li>
          <li>Track your footprint over time</li>
          <li>View visual breakdowns of your emissions</li>
          <li>Understand your environmental impact</li>
        </ul>
        <h3>Technologies Used:</h3>
        <p>Built with the MERN stack (MongoDB, Express.js, React.js, Node.js)</p>
      </div>
    </div>
  );
};

export default About;
