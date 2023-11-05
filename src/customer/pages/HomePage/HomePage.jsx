import React from 'react'
import MainCrosel from '../../components/HomeCrosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../data/mens_kurta'
import { womens_lahga } from '../../../data/womens_lahga'
import { gouns } from '../../../data/gouns'
import { womens_dress } from '../../../data/womens_dress'
import { mens_pants } from '../../../data/mens_pants'

function HomePage() {
  return (
    <div>
      <MainCrosel/>
 
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
      <HomeSectionCarosel data={mens_pants} sectionName={"Men's Pants"}/>
      <HomeSectionCarosel data={gouns} sectionName={"Women's Gouns"}/>
      <HomeSectionCarosel data={womens_lahga} sectionName={"Women's Saree"}/>
      <HomeSectionCarosel data={womens_dress} sectionName={"Women's Dress"}/>
      </div>
        
    </div>
    
  )
}

export default HomePage

