const User = require('../models/User');

exports.calculateTax = async (req, res) => {
  const { panNumber } = req.body;

  try {
    const user = await User.findOne({ panNumber });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const { yearlyIncome, userType } = user;
    let tax;

    if (userType === 'resident') {
      tax = computeResidentTax(yearlyIncome);
    } else if (userType === 'business') {
      tax = computeBusinessTax(yearlyIncome);
    } else if (userType === 'non-resident') {
      tax = computeNonResidentTax(yearlyIncome);
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    res.status(200).json({ tax });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const computeResidentTax = (yearlyIncome) => {
  let tax;
  if (yearlyIncome <= 400000) {
    tax = yearlyIncome * 0.01;
  } else if (yearlyIncome <= 500000) {
    tax = 4000 + (yearlyIncome - 400000) * 0.1;
  } else if (yearlyIncome <= 700000) {
    tax = 14000 + (yearlyIncome - 500000) * 0.2;
  } else {
    tax = 54000 + (yearlyIncome - 700000) * 0.3;
  }
  return tax;
};

const computeBusinessTax = (yearlyIncome) => {
  return yearlyIncome * 0.25;
};