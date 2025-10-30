import React, { useState } from 'react';
import { calculateFootprint } from '../services/api';

const Calculator = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    electricity: '',
    transportation: '',
    fuel: '',
    diet: 'moderate'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await calculateFootprint(formData);
      onCalculate(response.data);
    } catch (error) {
      alert('Error calculating footprint');
    }
  };

  return (
    <div className="card">
      <h2>Calculate Your Carbon Footprint</h2>
      <form onSubmit={handleSubmit}>
        <label>Monthly Electricity Usage (kWh):</label>
        <input type="number" name="electricity" value={formData.electricity} onChange={handleChange} required />
        
        <label>Monthly Transportation (km):</label>
        <input type="number" name="transportation" value={formData.transportation} onChange={handleChange} required />
        
        <label>Monthly Fuel Consumption (liters):</label>
        <input type="number" name="fuel" value={formData.fuel} onChange={handleChange} required />
        
        <label>Diet Type:</label>
        <select name="diet" value={formData.diet} onChange={handleChange}>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="moderate">Moderate Meat</option>
          <option value="high">High Meat</option>
        </select>
        
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Calculator;
