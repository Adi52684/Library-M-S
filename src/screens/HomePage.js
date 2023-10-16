import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel'
import Cardbook from '../components/Cardbook';
import Footer from '../components/Footer';

const HomePage = () => {
    

    return (
        <div className='hp'>
            <div><Navbar /></div>
            <div><Carousel/></div>
            <div><Cardbook/></div>
            <div><Footer/></div>
        </div>

    )
}

export default HomePage