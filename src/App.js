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
            <img src="https://avatars.githubusercontent.com/u/78967360?s=400&u=d200265f9676cd240678dce267e7adb0785228f9&v=4" className="user-img" alt="user/img"></img>
            <p className="user-title">Title</p>
            <p className="user-value">Value</p>
            <div className='values-list' >
              <button className="icon" data-label="name"><FaUser/></button>
              <button className="icon" data-label="street"><FaMap/></button>
              <button className="icon" data-label="phone"><FaPhone/></button>
              <button className="icon" data-label="age"><FaCalendarTimes/></button>
              <button className="icon" data-label="email"><FaEnvelopeOpen/></button>
              <button className="icon" data-label="password"><FaLock/></button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App
