import React, { useEffect, useState } from "react";

const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(null);
  const [error, setError] = useState("");

  const calculateTax = () => {
    if (!income || isNaN(income)) {
      setTax(null);
      setError("Please Enter Your Income");
      return;
    }

    setError("");
    let taxAmount = 0;
    const annualIncome = parseFloat(income);
    if (annualIncome <= 40000) {
      taxAmount = 0;
    } else if (annualIncome <= 40000) {
      taxAmount = annualIncome * 0.01;
    } else if (annualIncome > 40000 && annualIncome <= 100000) {
      taxAmount = annualIncome * 0.1;
    } else if (annualIncome > 100000 && annualIncome <= 200000) {
      taxAmount = annualIncome * 0.2;
    } else if (annualIncome > 200000 && annualIncome <= 1300000) {
      taxAmount = annualIncome * 0.3;
    } else {
      taxAmount = annualIncome * 0.36;
    }

    setTax(taxAmount.toFixed(2));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Nepali Tax Calculator
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text font-medium mb-2"
            htmlFor="income"
          >
            Annual Income (NPR)
          </label>
          <input
            type="number"
            id="income"
            placeholder="Enter Your Annual Income"
            className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <button
          onClick={calculateTax}
          className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Calculate Tax
        </button>
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="text-lg">{error}</p>
          </div>
        )}
        {tax !== null && !error && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            <p className="text-lg">Estimated Tax: NPR {tax}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxCalculator;
