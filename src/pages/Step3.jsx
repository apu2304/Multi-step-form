import React from 'react'
import { Link } from 'react-router-dom'

export default function Step3({ addAddon, total }) {
  const addons = [{ title: "Online service", para: "Access to multiplayer games", price: 1 },
  { title: "Larger storage", para: "Extra 1TB of cloud save", price: 2 },
  { title: "Customizable Profile", para: "Custom theme on your profile", price: 2 }

  ]
  return (
    <div className='main'>
      <h1 className="h1"> Pick add-ons</h1>
      <p className='sub'> Add-ons help enhance your gaming experience.</p>
      <div className="flex flex-col gap-4 p-4">
        {addons.map((addon, index) => {
          console.log(total.addons);
          let spanClass = total.addons.includes(addon) ? 'eve' : '';
          return (
            <div key={index} className={`input p-3 ${spanClass}`}>
              <input type="checkbox" className={`inline checked:bg-palatinateBlue`} onClick={() => addAddon(addon)}/>
              <span className='h1 ml-4'>{addon.title}</span>
                <span className='block text-sm ml-3 md:ml-0 mr-24'>{addon.para}</span>
              <span className="float-right text-palatinateBlue">{`+$${addon.price} /mon`}</span>
            </div>
          )
        })}
      </div>
      <button className='float-start mt-3 text-coolGray text-lg '><Link to={'/step2'}>Go back</Link></button>
      <button className="btn  float-end"><Link to={'/step4'}>Next Step</Link></button>
    </div>
  )
}