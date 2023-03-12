import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'router'
import {ViewBooking} from './BookingsComponent/ViewBooking'

export default function LawyerComponent() {
    return (
        <div>
         <Routes>
         <Route path="/lawyer/viewBooking" element={<ViewBooking/>} />
         </Routes>

        </div>
    )
}
