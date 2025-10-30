import React from 'react';

const Chart = ({ data }) => {
  if (!data) return null;

  const maxValue = Math.max(data.electricity, data.transportation, data.fuel, data.diet);

  return (
    <div className="card">
      <h2>Emission Breakdown</h2>
      <div style={styles.chart}>
        {Object.entries(data).filter(([key]) => key !== 'total').map(([key, value]) => (
          <div key={key} style={styles.bar}>
            <div style={styles.label}>{key}</div>
            <div style={styles.barContainer}>
              <div style={{...styles.barFill, width: `${(value/maxValue)*100}%`}}>
                {value.toFixed(2)} kg
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  chart: { marginTop: '20px' },
  bar: { marginBottom: '15px' },
  label: { fontWeight: 'bold', marginBottom: '5px', textTransform: 'capitalize' },
  barContainer: { background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' },
  barFill: { background: '#4CAF50', padding: '8px', color: 'white', textAlign: 'right' }
};

export default Chart;
