const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  electricity: {
    type: Number,
    required: true,
  },
  transportation: {
    type: Number,
    required: true,
  },
  fuel: {
    type: Number,
    required: true,
  },
  diet: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Calculation', CalculationSchema);
