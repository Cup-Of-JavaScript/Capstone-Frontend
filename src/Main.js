import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopPanel from './TopPanel'
import Customer from './Customer'
import Technician from './Technician'
import { BillingReport } from './BillingReport'
import './Main.css'

export const Main = () => {
  return (
    <div>
      <h1>Apartment Ticketing System</h1>
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPanel />}>
            <Route index element={<Customer />}/>
            <Route path="technician" element={<Technician />} />
            <Route path="billing" element={<BillingReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}
