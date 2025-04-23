import React,{useEffect, useState} from 'react'
import Input from './Input'

function Converter() {
    const [amount,setAmount] = useState(1)
    const [from,setFrom] = useState("inr")
    const [to,setTo] = useState("usd")
    // const []
    const [convertedAmount,setConvertedAmount] = useState(0)
    useEffect(()=>{
        setConvertedAmount(amount*83)
    },[])

  return (
    <div className=' w-[500px] h-[500px] bg-cyan-500'>
        <h4>Currency Converter</h4>
        <Input currency={from} amount={amount}/>
        <button>Swap</button>
        <Input currency={to} amount={convertedAmount}/>
    </div>
  )
}

export default Converter