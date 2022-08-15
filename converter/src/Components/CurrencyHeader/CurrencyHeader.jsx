import React, {useState, useEffect} from 'react'
import CurrencyOptions from '../CurrencyOption/CurrencyOptions'
const CurrencyHeader = ({setCurrencyOptions, setToCurrency, setFromCurrency, currencyOptions, fromCurrency, setCurrencyNames, toCurrency}) => {
    useEffect(() =>{
        fetch(`https://api.frankfurter.app/currencies`).then(res => res.json()).then(data => {
          setCurrencyOptions(Object.keys(data))
          setFromCurrency(Object.keys(data)[0])
          setToCurrency(Object.keys(data)[0])
          setCurrencyNames(data)
        })
    },[])
  return (
    <div className = "item1">
    <div className = "opt-1">
      <h2>From Currency : </h2>
      <CurrencyOptions prop = "From currency" fromCurrency = {fromCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setFromCurrency(e.target.value)}/>
    </div>
    <div className = "opt-2">
      <h2>To Currency : </h2>
      <CurrencyOptions prop = "To currency" toCurrency = {toCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setToCurrency(e.target.value)}/>
    </div>
  </div> 
  )
}

export default CurrencyHeader