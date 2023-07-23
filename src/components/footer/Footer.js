import React from 'react'
import '../footer/Footer.css'
import img from '../../assets/logo.png'
import SubscribeBtn from '../subscribe/subscribeBtn/SubscribeBtn'

export default function Footer() {
  return (
    <div>
        <div className="container-fluid fl">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                        <img src={img} alt="" />
                        <p className='sales'>NFT marketplace UI creater <br /> with Anima for Figma.</p>
                        <p className='sales'>Join our community</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                        <h6 className='text-white'>Explore</h6>
                        <p className='sales'>Marketplace</p>
                        <p className='sales'>Rankings</p>
                        <p className='sales'>Connect a wallet</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                    <h6 className='text-white'>Join Our Weekly Digest</h6>
                        <p className='sales'>Get exclusive promotions & updates <br />straight in your box</p>
                        <SubscribeBtn/>
                    </div>
                </div>
                <hr />
                <p className='sales pb-3'>&copy; NFT Market. Use this templets freely</p>
            </div>
        </div>
    </div>
  )
}
