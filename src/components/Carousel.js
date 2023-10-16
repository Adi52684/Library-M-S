import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pic1 from '../assets/Pic1.png'
import Pic2 from '../assets/Pic2.png'
import Pic3 from '../assets/Pic3.png'
import { FcSearch } from "react-icons/fc";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Pic1} alt="Image 1" />
                </div>
                <div>
                    <img src={Pic2} alt="Image 2" />
                </div>
                <div>
                    <img src={Pic3} alt="Image 3" />
                </div>
            </Slider>
            <div class="search-bar">
                <input type="text" placeholder="Search..."  />
                <button><FcSearch /></button>
                
            </div>
        </div>
    )
}

export default Carousel