import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Step1() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  useEffect(() => { 
    setIsFormValid(name !== '' && email !== '' && number !== '')
    console.log(name, email, number)
   }, [name, email, number])
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, number)
  }
  return (
    <div className='main'>
      <h1 className="h1">Personal info</h1>
      <p className='sub'>Please provide your name, email address, and phone number.</p>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label className='mb-6'>
          <span className='block mb-2'>Name</span>
          <input type="text" 
          onChange={(e) => setName(e.target.value)} value={name} required
          placeholder='e.g. Stephen King' className='input w-full py-1 px-3'/>
        </label>
        <label className='mb-6'>
          <span className='block mb-2'>Email Address</span>
          <input type="email" 
          onChange={(e) => setEmail(e.target.value)} value={email} required
          placeholder='e.g. stephenking@lorem.com'  className='input w-full py-1 px-3'/>
        </label>
        <label className='mb-6'>
          <span className='block '>Phone Number</span>
          <input type="number" 
          onChange={(e) => setNumber(e.target.value)} value={number} required
          placeholder='e.g. +1 234 567 890' className='input w-full py-1 px-3'/>
        </label>
        {isFormValid ? (<button className='justify-center md:justify-end ml-0 md:ml-72 mt-4 btn' type='submit'><Link to={'/step2'}>Next Step</Link></button>) :
        (<button className='justify-center md:justify-end ml-0 md:ml-72 mt-4 btn' disabled type='submit'><Link to={'/step2'}>Next Step</Link></button>)}
      </form>
      
    </div>
  )
}
