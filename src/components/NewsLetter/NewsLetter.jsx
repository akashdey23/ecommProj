import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On your Mail</h1>
      <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
