import React from 'react'
import '../cards/cardsCss/Cards.css'

export default function Cards(props) {
    return (
        <div>
            <div class="card card-collection   bg-transparent border-0" style={{ width: '17rem' }}>
                <img src={props.src1} class="card-img-top img-fluid " alt="..." />
                <br />
                <div class="  bg-transparent">
                    <div className="row ">
                        <div className="col-4">
                            <img src={props.src2} className='img-fluid' alt="" />
                        </div>
                        <div className="col-4">
                            <img src={props.src3} className='img-fluid' alt="" />
                        </div>
                        <div className="col-4">
                            <img src={props.src4} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <p className='text-white  fw-bold fs-5 '>{props.title}</p>
                    <img src={props.src5} alt="" />
                </div>
            </div>
        </div>
    )
}
