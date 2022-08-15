import React from 'react'

const CurrencyExchange = ({fromAmount, toAmount, setFromAmount}) => {
  return (
    <div className="item3">
    <input
      type="number"
      autoComplete="off"
      value={fromAmount}
      className="input"
      onChange={(e) => setFromAmount(e.target.value)}
    />
    <h3>=</h3>
    <input className="output" disabled value={toAmount} type="text" />
  </div>
  )
}

export default CurrencyExchange