import React from 'react'
import '../howItWorks/HowItWorks.css'
import HowItWorksCards from './howItWorksCards/HowItWorksCards'
import img1 from'../../assets/Icon.png'
import img2 from'../../assets/Icon (1).png'
import img3 from'../../assets/Icon (2).png'



export default function HowItWorks() {
    return (
        <div className='HowItWorks'>
            <div className="container ">
                <div className="row py-5">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <p className=' text-white h5 display-5 fw-bold '>How It Works</p>
                        <p className='text-white fs-4 font-monospace'>Find Out How To Get Started</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                        <HowItWorksCards src={img1} title="Setup Your Wallet" para="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                        <HowItWorksCards src={img2} title="Create Collection" para="Upload your work and setup your collection. Add a description, social links and floor price." />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-3">
                        <HowItWorksCards src={img3} title="Start Earning" para="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
                    </div>
                </div>
            </div>
        </div>
    )
}
