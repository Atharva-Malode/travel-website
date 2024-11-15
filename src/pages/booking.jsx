import React, { useState } from "react";

const Booking = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [emiOption, setEmiOption] = useState(false);

  const handlePaymentChange = (e) => setPaymentMethod(e.target.value);
  const handleEmiChange = () => setEmiOption(!emiOption);

  return (
    <div className="min-h-screen mt-14 flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Booking Payment
        </h1>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold dark:text-gray-300 mb-2">
            Select Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={handlePaymentChange}
            className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* EMI Option for Card */}
        {paymentMethod === "card" && (
          <>
            <div className="mb-6 flex items-center space-x-4">
              <input
                type="checkbox"
                checked={emiOption}
                onChange={handleEmiChange}
                className="h-5 w-5"
              />
              <label className="dark:text-gray-300">Enable EMI Payment</label>
            </div>

            {/* Card Details Section */}
            <div className="space-y-4">
              <div>
                <label className="block dark:text-gray-300">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9123 4567"
                  className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label className="block dark:text-gray-300">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block dark:text-gray-300">CVV</label>
                  <input
                    type="password"
                    placeholder="123"
                    className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block dark:text-gray-300">Name on Card</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* EMI Options if EMI is enabled */}
              {emiOption && (
                <div className="mt-6">
                  <label className="block text-lg font-semibold dark:text-gray-300 mb-2">
                    Select EMI Duration
                  </label>
                  <select className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white">
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                  </select>
                </div>
              )}
            </div>
          </>
        )}

        {/* UPI Option */}
        {paymentMethod === "upi" && (
          <div className="space-y-4 mt-6">
            <label className="block dark:text-gray-300">Enter UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {/* Submit Button */}
        <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg text-xl shadow-md hover:bg-blue-700 transition-all">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Booking;
