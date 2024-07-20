import React from 'react'
import HomeMotion from './HomeMotion'
import '../../../App.css'
import HomeText from './HomeText'

const HomeCarousel = () => {
  return (
    <div className='background h-[100vh] w-[100%] flex justify-between'>
        <HomeText/>
        <HomeMotion/>
    </div>
  )
}

export default HomeCarousel