import React from 'react'
import '../card/cardCss/Cards.css'

export default function Cards(props) {
  return (
    <div>
        <div className="card cards rounded-5 border-0 bg-transparent3 my-2">
            <div className="m-1 mt-3 mx-3 mb-0">
                <span className='tag-card'>{props.number}</span>
            </div>
            <div className="card-body text-center">
                <h5 className='card-title'>
                <img src={props.img} alt="" className='img-fluid'/>
                </h5>
                
                <h4 className='card-subtitle mb-2 text-white'>{props.name} </h4>
                <p className='card-text text-white'><span className='sales'>Total Sales:</span>34.53 ETH</p>
            </div>
        </div>
    </div>
  )
}
