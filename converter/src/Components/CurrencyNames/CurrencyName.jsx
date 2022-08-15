import React from 'react'

const CurrencyName = ({currencyNames, fromCurrency, toCurrency}) => {
  return (
    <div className="item2">
    <h2>Enter Amount in {currencyNames[`${fromCurrency}`]} : </h2>
    <h2>Output in {currencyNames[`${toCurrency}`]} : </h2>
  </div>
  )
}

export default CurrencyName