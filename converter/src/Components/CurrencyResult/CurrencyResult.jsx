import React from 'react'

const CurrencyResult = ({ fromAmount, fromCurrency, toCurrency, toAmount }) => {
  return (
    <div className="item4">
    <h2>
      {fromAmount} {fromCurrency} = {toAmount} {toCurrency}
    </h2>
  </div>
  )
}

export default CurrencyResult