import React from 'react'
import '../discoverCard/DiscoverCards.css'

export default function DiscoverCard(props) {
  return (
    <div>
        <div className=" rounded-5 border-0 bg-transparent">
                <div class="card bg-transparent border-0" >
                    <img src={props.src} class="card-img-top" className='img-fluid' alt="..." />
                    <div class="card-body">
                        <h4 class="card-text text-white px-1">{props.name}</h4>
                        <img src={props.img2} alt="" className='img-fluid' />
                        <div className="d-flex justify-content-between pt-3">
                            <p className=' asdf font-monospace'>Price</p>
                            <p className=' asdf font-monospace'>Higest Bid</p>
                        </div>
                        <div className="d-flex justify-content-between ">
                            <p className=' text-white'>1.63 ETH</p>
                            <p className='  text-white'>0.33 wETH</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
