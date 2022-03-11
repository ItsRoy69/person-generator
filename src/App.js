import React from 'react'
import { FaUser, FaCalendarTimes, FaMap, FaLock, FaPhone, FaEnvelopeOpen } from "react-icons/fa"

const App = () => {
    return (
      <div>
        <div className='block bcg-black' >
          This is the Black Banne Div
        </div>
        <div className='block' >
          <div className='container' >
            <img src="" className="user-img" alt="user/img"></img>
            <p className="user-title">Title</p>
            <p className="user-value">Value</p>
            <div className='values-list' >
              <button ClassName="icon" data-label="name"><FaUser/></button>
              <button ClassName="icon" data-label="street"><FaCalendarTimes/></button>
              <button ClassName="icon" data-label="phone"><FaPhone/></button>
              <button ClassName="icon" data-label="age"><FaCalendarTimes/></button>
              <button ClassName="icon" data-label="email"><FaEnvelopeOpen/></button>
              <button ClassName="icon" data-label="password"><FaLock/></button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App
