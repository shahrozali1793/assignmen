import React from 'react'
import '../browsCards/BrowsCards.css'

export default function BrowsCards(props) {
    return (

        <div className=" rounded-5 border-0 bg-transparent">

            <div className=" ">
                <div class="card bg-transparent border-0" >
                    <img src={props.src} class="card-img-top" className='img-fluid' alt="..." />
                    <div class="card-body">
                        <h4 class="card-text text-white px-1">{props.name}</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}
