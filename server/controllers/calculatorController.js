const Calculation = require('../models/Calculation');
const { EMISSION_FACTORS } = require('../utils/emissionFactors');

exports.calculate = async (req, res) => {
  try {
    const { electricity, transportation, fuel, diet } = req.body;

    // Calculate emissions
    const electricityEmission = electricity * EMISSION_FACTORS.electricity;
    const transportationEmission = transportation * EMISSION_FACTORS.transportation;
    const fuelEmission = fuel * EMISSION_FACTORS.fuel;
    const dietEmission = EMISSION_FACTORS.diet[diet];

    const total = electricityEmission + transportationEmission + fuelEmission + dietEmission;

    // Save calculation
    const calculation = new Calculation({
      user: req.userId,
      electricity: electricityEmission,
      transportation: transportationEmission,
      fuel: fuelEmission,
      diet: dietEmission,
      total,
    });

    await calculation.save();

    res.json({
      electricity: electricityEmission,
      transportation: transportationEmission,
      fuel: fuelEmission,
      diet: dietEmission,
      total,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const calculations = await Calculation.find({ user: req.userId })
      .sort({ date: -1 })
      .limit(10);

    res.json(calculations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
