'use client'

import Image from "next/image"
import questionlogo from '../images/icon-accessibility.svg'
import light from '../images/icon-sun-dark.svg'
import dark from '../images/icon-moon-dark.svg'
import { useState } from "react"


const Header = () => {

    const [lightMode, setLigtMode] = useState(true)

    return(
        <header className='flex items-center justify-between'>
            <div className='flex items-center'> 
                <Image
                    src={questionlogo}
                    alt='question-logo'
                    // width={40}
                /> 
                <p className='text-[28px] font-500 ml-[10px]'>Accessibility</p>
            </div>
            <div className='flex items-center gap-[20px]'>
                <Image
                    src={light}
                    alt='light-mode'
                    width={30}
                    height={30}
                />
                <div 
                    className='bg-purple w-[50px] h-[30px] rounded-[999px] relative cursor-pointer'
                    onClick={()=>setLigtMode(!lightMode)}
                >
                    <div 
                        className={`bg-white w-[20px] h-[20px] rounded-[100%] absolute top-[5px]
                        ${lightMode  ? `left-[2px]` : `right-[2px]`}`}
                    />
                </div>
                <Image
                    src={dark}
                    alt='dark-mode'
                    width={30}
                    height={30}
                />
            </div>
            {/* start by creating a repo and pushing what you have done so far */}
        </header>
    )
}

export default Header;