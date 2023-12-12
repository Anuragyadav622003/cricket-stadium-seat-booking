import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Event from './Event'
import Register from './Register'
import SeatLayout from './SeatLayout'
import BookIt from './BookIt'
import Ticket from './Ticket'

function Routting() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/event' element={<Event/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/seat-layout' element={<SeatLayout/>}></Route>
           <Route path = '/bookIt' element = {<BookIt/>}/>
           <Route path='/ticket' element = {<Ticket/>}/>
        </Routes>
    </div>
  )
}

export default Routting