import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'

const Pay = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")


  const paystack =(e)=>{
    if(firstName === "" || lastName === "" || email === "" || amount === ""){
      alert("All Input are Required")
    } else{
      const Key = import.meta.env.VITE_APP_PAYSTACK_KEY;
      e.preventDefault()
      const paystack = new PaystackPop()
      paystack.newTransaction({
      key: Key,
      amount: amount * 100 ,
      firstName,
      lastName,
      email,
      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        setFirstName("")
        setLastName("")
        setEmail("")
        setAmount("")
      },
      oncancel(){
        alert("You have Canceled the Transaction")
      }
    })
  }
}
  return (
    <section id='paystack' className='border px-4' >
    <marquee id='paymentHeader' behavior="" direction="">Make Payment</marquee>
    <div id='Payment' className='col-lg-4 mx-auto py-4 px-4 bg-light rounded shadow'>
      <label id='label' htmlFor="">Firstname</label>
      <input className='form-control my-3' onChange={(e) => setFirstName(e.target.value)} type="text" />
      <label id='label' htmlFor="">Lastname</label>
      <input className='form-control my-3' onChange={(e) => setLastName(e.target.value)} type="text" />
      <label id='label' htmlFor="">Email</label>
      <input className='form-control my-3' onChange={(e) => setEmail(e.target.value)} type="text" />
      <label id='label' htmlFor="">Amount</label>
      <input className='form-control my-3' onChange={(e) => setAmount(e.target.value)} type="text" />
      <button id='payButton' onClick={paystack} className='btn w-100 my-3'>PAY</button>
    </div>
    
    </section>
  )
}

export default Pay