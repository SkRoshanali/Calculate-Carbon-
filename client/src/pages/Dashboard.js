import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Results from '../components/Results';
import Chart from '../components/Chart';
import History from '../components/History';
import { getHistory } from '../services/api';

const Dashboard = () => {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchHistory();
  }, [navigate]);

  const fetchHistory = async () => {
    try {
      const response = await getHistory();
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history');
    }
  };

  const handleCalculate = (data) => {
    setResult(data);
    fetchHistory();
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Calculator onCalculate={handleCalculate} />
      <Results result={result} />
      <Chart data={result} />
      <History history={history} />
    </div>
  );
};

export default Dashboard;
