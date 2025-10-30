// Emission factors in kg CO2
const EMISSION_FACTORS = {
  electricity: 0.82, // kg CO2 per kWh
  transportation: 0.21, // kg CO2 per km (average car)
  fuel: 2.31, // kg CO2 per liter of gasoline
  diet: {
    vegan: 50, // kg CO2 per month
    vegetarian: 85, // kg CO2 per month
    moderate: 120, // kg CO2 per month
    high: 170, // kg CO2 per month
  },
};

module.exports = { EMISSION_FACTORS };
