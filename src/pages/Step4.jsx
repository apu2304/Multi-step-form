import React from 'react'
import { Link } from 'react-router-dom'

export default function Step4({total, isYearly, toggleBilling}) {
  const planPrice = isYearly ? total.plan.yearlyPrice : total.plan.monthlyPrice; 
  const addonsPrice = total.addons.reduce((sum, addon) => sum + addon.price, 0); 
  const totalPrice = planPrice + addonsPrice;
  return (
    <div className='px-4 pt-3 md:pt-16 h-full bg-white rounded-b-xl pb-14 md:pb-0'>
      <h1 className="h1"> Finishing up</h1>
      <p className="sub">Double-check everything looks OK before confirming.</p>
      <div className="bg-aliceBlue p-10 m-3 rounded-lg">
        <span className="h1">{total.plan.title}</span>
        <span className='float-right font-bold text-polynesianBlue mt-1'>{`$${planPrice}/${isYearly ? 'yr' : 'mo'}`}</span>
        <p onClick={toggleBilling} className='cursor-pointer text-blue-600 underline'>Change</p>
        <div className='w-full border-b-2 border-b-slate-200 rounded-md'></div>
        {total.addons.map((addon) => (
          <div key={addon.title}>
            <span className="text-coolGray mb-2">{addon.title}</span>
            <span className='float-right font-bold text-coolGray'>{`$${addon.price}/mo`}</span>
          </div>
        ) 
        )}
      </div>
      <div className="px-5  pb-12">
      <span className='text-coolGray font-medium text-lg mt-3'>Total Price</span>
      <span className='h1 float-right'>{`$${totalPrice}/mo`}</span>
      </div>
       <button className='float-start mt-3 text-coolGray text-lg '><Link to={'/step3'}>Go back</Link></button>
            <button className="btn  float-end"><Link to={'/popup'}>Confirm</Link></button>
    </div>
  )
}