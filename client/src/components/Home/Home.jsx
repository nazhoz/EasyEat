import React from 'react'
import HomeCarousel from '../../pages/Home/HomeFirst/HomeCarousel'
import HomeSecond from '../../pages/Home/HomeSecond/HomeSecond'
import HomeThird from '../../pages/Home/HomeThird/HomeThird'
import HomeFour from '../../pages/Home/HomeFour/HomeFour'


const Home = () => {
  return (
    <div className='relative  w-full bg-gray-100'>
    <HomeCarousel/>
    <HomeSecond/>
    <HomeThird/>
    <HomeFour/>
    </div>
  )
}

export default Home