import React from 'react'

export default function Cards(props) {
  return (
    <div >
        <p className='total text-white h6 display-6 fw-bold '>{props.total}k+</p>
        <p className='text-white titl text-white fs-4  fw-light'>{props.title}</p>
    </div>
  )
}
