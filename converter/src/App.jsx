import React, { useEffect, useState } from "react";
import CurrencyHeader from "./Components/CurrencyHeader/CurrencyHeader";
import "./App.css";
import CurrencyName from "./Components/CurrencyNames/CurrencyName";
import CurrencyExchange from "./Components/CurrencyExcahnge/CurrencyExchange";
import CurrencyResult from "./Components/CurrencyResult/CurrencyResult";
function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [currencyNames, setCurrencyNames] = useState({});
  useEffect(() => {
    if (parseInt(fromAmount) === 0) {
      setToAmount(0);
    } else if (fromAmount === "") {
      setToAmount("");
    } else if (fromCurrency === toCurrency) {
      setToAmount(fromAmount);
    } else {
      fetch(
        `https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`
      ).then((res) =>
        res.json().then((data) => setToAmount(Object.values(data.rates)))
      );
    }
  }, [fromCurrency, toCurrency, fromAmount, toAmount]);
  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <div className="container">
        <CurrencyHeader
          toCurrency={toCurrency}
          setCurrencyNames={setCurrencyNames}
          fromCurrency={fromCurrency}
          currencyOptions={currencyOptions}
          setCurrencyOptions={setCurrencyOptions}
          setToCurrency={setToCurrency}
          setFromCurrency={setFromCurrency}
        />
        <CurrencyName
          toCurrency={toCurrency}
          fromCurrency={fromCurrency}
          currencyNames={currencyNames}
        />
        <CurrencyExchange
          toAmount={toAmount}
          setFromAmount={setFromAmount}
          fromAmount={fromAmount}
        />
        <CurrencyResult
          fromAmount={fromAmount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          toAmount={toAmount}
        />
      </div>
    </div>
  );
}

export default App;
