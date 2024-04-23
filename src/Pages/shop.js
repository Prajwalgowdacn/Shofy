import React from 'react'
import Slider from '../Compoments/Slider/Slider'
import { Popular } from '../Compoments/Popular/Popular'
// import { Offers } from '../Compoments/Offers/Offers'
import { NewCollections } from '../Compoments/NewCollections/NewCollections'
import NewsLetter from '../Compoments/NewsLetter/NewsLetter'
// import  Footer  from '../Compoments/Footer/Footer'


export const Shop = () => {
  return (
    <div>
        <Slider/>
        <Popular/>
        {/* <Offers/> */}
        <NewCollections/>
        <NewsLetter/>
        {/* <Footer/> */}
    </div>
  )
}
