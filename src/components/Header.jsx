import React from 'react'
import { Button } from './ui/button'

const Header = () => {
    const verifiers = 11
    const alert = true
  return (
    <div className='flex justify-between items-center px-8 py-[30px]'>
        <div className='text-2xl items-center flex gap-2 font-bold'>
            <span>Verifiers</span>
            <div className='w-6 flex items-center justify-center h-6 text-[#039BF0] text-xs bg-[#F2FAFF] rounded-full'>
                <span className=''>{verifiers}</span>
            </div>
        </div>
        <div className='flex item-center justify-center'>
            <button className='relative'>
                {alert && <div className='w-2 h-2 bg-[#E85652] rounded-full absolute top-[14px] right-0'></div>}
                <img src="/bell.svg" alt="notifications" />
            </button>
            <button className='  pl-4'>
                <img src="/Profile-Picture.svg" alt="profile picture" />
            </button>
            <button>
                <img src="/chevron-down.svg" alt="drop down" />
            </button>
                
        </div>
    </div>
  )
}

export default Header