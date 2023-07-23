import React from 'react'
import '../topCreaterButton/createrButton/createrButtonCss/CreaterButton.css'

export default function TopCreaterButton(props) {
  return (
    <div className='p-5'>
        {/* <button type="button " className="btn p-3  createrBtn text-white"><i class="bi createrBtn2 bi-rocket-takeoff-fill"></i> View Ranking</button> */}
        <button className='btn fw-bold createrBtn text-white  p-3'><i className={props.class}></i>{props.title}</button>
    </div>
  )
}
