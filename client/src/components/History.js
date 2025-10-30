import React from 'react';

const History = ({ history }) => {
  return (
    <div className="card">
      <h2>Calculation History</h2>
      {history.length === 0 ? (
        <p>No calculation history yet.</p>
      ) : (
        <div>
          {history.map((item, index) => (
            <div key={index} style={styles.historyItem}>
              <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
              <p><strong>Total:</strong> {item.total.toFixed(2)} kg CO2</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  historyItem: { padding: '10px', marginBottom: '10px', background: '#f9f9f9', borderRadius: '4px' }
};

export default History;
