import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Popup from './pages/Popup'
import Sidebar from './pages/Sidebar'

function App() {
  const [total, setTotal] = useState({plan: '', addons: []});
  const [isYearly, setIsYearly] = useState(false);
  const addPlan = (plan) => {
    setTotal({...total,  plan});
  }
  const addAddon = (addon) => {
    let newAddons;
    if(!total.addons.includes(addon)){
      newAddons = [...total.addons, addon];
    }else{
      newAddons = total.addons.filter((item) => item !== addon);
    }
    setTotal({...total, addons: newAddons});
  }
  const toggleBilling = () => { setIsYearly(!isYearly); };
  return (
    <div className='bg-aliceBlue h-screen w-full flex justify-start md:justify-center items-start md:items-center'>
      <div className='bg-none md:bg-white flex flex-col md:flex-row font-body rounded-xl shadow-none md:shadow-lg p-5'>
        <div>
        <Sidebar className=""/>
        </div>
        <div className='w-[360px] md:w-[460px]'>
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/step2' element={<Step2 total={total} addPlan={addPlan} isYearly={isYearly} toggleBilling={toggleBilling}/>} />
          <Route path='/step3' element={<Step3 total={total} addAddon={addAddon}/>} />
          <Route path='/step4' element={<Step4 total={total} isYearly={isYearly} toggleBilling={toggleBilling}/>} />
          <Route path='/popup' element={<Popup/>}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
