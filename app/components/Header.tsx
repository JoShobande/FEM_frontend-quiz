'use client'

import Image from "next/image"
import questionlogo from '../images/Accessibility.svg'
import questionlogomobile from '../images/icon-accesibility-mobile.svg'
import light from '../images/icon-sun-dark.svg'
import dark from '../images/icon-moon-dark.svg'
import { useState } from "react"
import {HeaderComponentProps} from '../interface'


const Header = ({setDarkMode, darkMode}:HeaderComponentProps) => {

    return(
        <header className='flex items-center justify-between'>
            <div className='flex items-center'> 
                {/* <Image
                    src={questionlogo}
                    alt='question-logo'
                    // width={40}
                    className='hidden md:block'
                /> 
                <Image
                    src={questionlogomobile}
                    alt='question-logo'
                    // width={40}
                    className='md:hidden'
                /> 
                <p className='text-[18px] md:text-[28px] font-500 ml-[10px]'>Accessibility</p> */}
            </div>
            <div className='flex items-center gap-[10px] md:gap-[20px]'>
                <Image
                    src={light}
                    alt='light-mode'
                    width={20}
                    height={20}
                    className='md:hidden'
                />
                 <Image
                    src={light}
                    alt='light-mode'
                    width={30}
                    height={30}
                    className='hidden md:block'

                />
                <div className='bg-purple w-[32px] md:w-[50px] h-[20px] md:h-[30px] rounded-[999px] relative cursor-pointer duration-300'>
                    <div 
                        className={`bg-white w-[12px] md:w-[20px] h-[12px] md:h-[20px] rounded-[100%] absolute top-[4px] md:top-[5px] transform  duration-300 ease-in-out
                        ${darkMode  ? `right-[2px]` : `left-[2px]`}`}
                        onClick={()=>setDarkMode(!darkMode)}
                    />
                </div>
                <Image
                    src={dark}
                    alt='dark-mode'
                    width={20}
                    height={20}
                    className='md:hidden'
                />
                 <Image
                    src={dark}
                    alt='dark-mode'
                    width={30}
                    height={30}
                    className='hidden md:block'
                />
            </div>
        {/* functionality of switch toggle to change background image and color. */}
        </header>
    )
}

export default Header;