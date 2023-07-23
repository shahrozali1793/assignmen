import React from 'react'
import '../fluidImg/FluidImg.css'
import img from '../../assets/NFT Highlight.png'

export default function FluidImg() {
  return (
    <div className='FluidImg'>
        <div className="container-fluid">
            <img src={img} alt="" className='img-fluid w-100' />
        </div>
    </div>
  )
}
