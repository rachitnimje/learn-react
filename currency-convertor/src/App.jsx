import { useState } from "react";
import InputCard from "./components/inputCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const conversionRates = useCurrencyInfo(fromCurrency);

  const currencyList = conversionRates.conversion_rates
    ? Object.keys(conversionRates.conversion_rates)
    : [];

  const swap = () => {
    let temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    temp = amount;
    setAmount(convertedAmount);
    setConvertedAmount(temp);
  };

  const convert = () => {
    let conversionRate = conversionRates.conversion_rates[toCurrency];
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="w-full h-svh bg-black flex flex-col justify-center items-center">
      <h1 className="text-black text-6xl font-semibold mb-4 greenGradient text-transparent bg-clip-text">
        Currency Convertor
      </h1>

      <div className="w-5/12 p-4 greenGradient rounded-lg flex-col">
        <InputCard
          label="From"
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          currencyList={currencyList}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
          selectedCurrency={fromCurrency}
        />
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-900 text-white px-2 py-0.5 text-lg"
            onClick={swap}
          >
            swap
          </button>
        </div>
        <InputCard
          label="To"
          amount={convertedAmount}
          currencyList={currencyList}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          selectedCurrency={toCurrency}
          disableAmount
        />

        <div className="flex justify-center">
          <button
            className="text-white rounded-lg bg-black p-1 px-2 text-xl"
            onClick={convert}
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
