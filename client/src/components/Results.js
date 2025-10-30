import React from 'react';

const Results = ({ result }) => {
  if (!result) return null;

  return (
    <div className="card">
      <h2>Your Carbon Footprint Results</h2>
      <div style={styles.result}>
        <h3>Total: {result.total.toFixed(2)} kg CO2/month</h3>
        <div style={styles.breakdown}>
          <p>Electricity: {result.electricity.toFixed(2)} kg CO2</p>
          <p>Transportation: {result.transportation.toFixed(2)} kg CO2</p>
          <p>Fuel: {result.fuel.toFixed(2)} kg CO2</p>
          <p>Diet: {result.diet.toFixed(2)} kg CO2</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  result: { marginTop: '20px' },
  breakdown: { marginTop: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '4px' }
};

export default Results;
