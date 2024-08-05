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
    <div className=" bg-white rounded-md p-4 flex flex-nowrap mb-2 text-xl">
      <div id="row-1" className="w-full">
        <label className="w-full text-black/40 mb-4 inline-block">
          {label}
        </label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={disableAmount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="outline-none bg-transparent"
        />
      </div>

      <div className="w-full justify-end text-end flex flex-wrap">
        <p className="text-black/40 mb-4 w-full">Currency Type</p>
        <select
          className="p-1 rounded-md"
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
