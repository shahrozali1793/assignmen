import React from 'react'
import '../browsCategories/BrowsCategories.css'
import BrowsCards from './browsCards/BrowsCards'
import img1 from '../../assets/Category Icon.png'
import img2 from '../../assets/Category Icon (1).png'
import img3 from '../../assets/Category Icon (2).png'
import img4 from '../../assets/Category Icon (3).png'
import img5 from '../../assets/Category Icon (4).png'
import img6 from '../../assets/Category Icon (5).png'
import img7 from '../../assets/Category Icon (6).png'
import img8 from '../../assets/Category Icon (7).png'

export default function BrowsCatagories() {
    return (
        <div className='BrowsCatagories '>
            <div className="container py-5 ">
                <div className="row ">
                    <div className="col ">
                        <p className=' text-white h5 display-5 fw-bold '>Brows Categories</p>
                        
                    </div>
                </div>

                <div className="row py-3 align-items-stretch ">
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img1} name="Art"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img2} name="Collectibles"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img3} name="Music"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img4} name="Photography"/>
                    </div>
                </div>

                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img5} name="Video"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img6} name="Utility"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img7} name="Sport"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src={img8} name="Virtual Worlds"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
