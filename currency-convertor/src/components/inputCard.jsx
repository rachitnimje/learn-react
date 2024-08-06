import React from "react";

function InputCard({
  label,
  amount,
  onAmountChange,
  disableAmount = false,
  selectedCurrency,
  onCurrencyChange,
  currencyList = [],
  disableCurrency = false,
}) {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-2 text-xl">
      <div className="w-full sm:w-1/2">
        <label className="text-black/40 mb-2 block">{label}</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={disableAmount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="outline-none bg-transparent w-full"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-end">
        <p className="text-black/40 mb-2 w-full text-right">Currency Type</p>
        <select
          className="p-1 rounded-md w-full sm:w-auto"
          value={selectedCurrency}
          disabled={disableCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyList.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputCard;