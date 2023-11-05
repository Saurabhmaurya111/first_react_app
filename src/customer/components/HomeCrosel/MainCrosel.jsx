import React from 'react'
import { MainCaroselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const items = MainCaroselData.map((items)=> <img className = "cursor-pointer" role='presentation' src={items.image} alt='' />)
const MainCrosel = () => {
  return (
    <AliceCarousel
       items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  )
}

export default MainCrosel
