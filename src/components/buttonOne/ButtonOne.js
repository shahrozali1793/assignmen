import React from 'react'
import img from '../../assets/RocketLaunch.png'
import '../buttonOne/ButtonOne.css'

export default function ButtonOne() {
  return (
    <div>
        <button  className='btn2'><img src={img}  /><span className='title'>Get Started</span></button>
    </div>
  )
}
