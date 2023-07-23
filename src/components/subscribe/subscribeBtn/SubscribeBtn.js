import React from 'react'
import '../subscribeBtn/SubscribeBtn.css'

export default function SubscribeBtn() {
    return (
        <div className='sbs mt-4'>
            <div class="input-group mb-3 ">
                <input type="text" class="form-control border-0 rounded-5" placeholder="Enter your email here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-sm button text-white rounded-4  fw-bold " type="button" >Subscribe</button>
            </div>
        </div>
    )
}
