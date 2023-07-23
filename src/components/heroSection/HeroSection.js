import React from 'react'
import '../../components/heroSection/HeroSection.css'
import ButtonOne from '../../components/buttonOne/ButtonOne'
import img from '../../assets/Image Placeholder.png'
import img2 from '../../assets/Artist Card.png'
import Cards from './card/Cards'

export default function HeroSection() {
    return (
        <div className='heroSection'>
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className='text-white h1 display-1 fw-bold'>Discover  Digital Art & Collect NFTs</p>
                        <p className='text-white fs-4 font-monospace'>NFT Marketplace UI Created with Anima for Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</p>
                        <ButtonOne />
                        <div className="row pt-3 d-flex">
                            <div className="col-4 ">
                                <Cards total="240" title="Total Sale" />
                            </div>
                            <div className="col-4 ">
                                <Cards total="100" title="Auctions" />
                            </div>
                            <div className="col-4 ">
                                <Cards total="240" title="Artists" />
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-12   ">
                        {/* <div className="card m-2 border rounded-3 d-flex justify-content-around" >
                            <img src={img} className="card-img-top border-0" alt="..." />
                            <div className="card-body ">
                                <h5 classNameName='text-white'>Space Walking</h5>
                                <div>
                                    <img src={img2} classNameName='img-fluid ' alt="" />

                                </div>
                            </div>
                        </div> */}
                        <div className="card border-0 cardss d-flex justify-content-around" >
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className='text-white h5  fw-bold'>Space Walking</h5>
                                <div>
                                    <img src={img2} classNameName='img-fluid ' alt="" />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
