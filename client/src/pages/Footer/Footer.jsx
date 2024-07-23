import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className='bg-[#171A21] text-[#A6A6A7] h-[60vh] w-[100%] gap-3'>
        <div className='flex justify-around items-center h-[310px]' >
            <div className='w-[250px] flex flex-col h-[250px] gap-3 '>
                <span className='text-[30px]'>WORKING HOURS</span>
                <div className='flex flex-col '>
                    <span>Mon-Fri: 9 AM - 6 PM</span>
                    <span>Saturday: 9 AM - 4 PM</span>
                    <span>Sunday: Closed</span>
                </div>
            </div>
            <div className='w-[300px] h-[300px] flex justify-evenly items-center flex-col'>
                <span className='text-center text-[30px]'>GET IN TOUCH</span>
                <div className=' h-[200px]'>
                    <SocialMedia/>
                </div>
            </div>
            
        </div>
        <hr />
        <div className='flex justify-center items-center h-[12%]'>
            <span>AncoraThemes © 2024. All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer