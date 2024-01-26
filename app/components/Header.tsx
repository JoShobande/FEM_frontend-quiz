'use client'

import Image from "next/image"
import { useQuestionContext } from "../context/questionContext"
import questionlogo from '../images/Accessibility.svg'
import questionlogomobile from '../images/icon-accesibility-mobile.svg'
// import light from '../images/icon-sun-dark.svg'
// import dark from '../images/icon-moon-dark.svg'
import {HeaderComponentProps} from '../interface'


const Header = ({setDarkMode, darkMode}:HeaderComponentProps) => {

    const {state} = useQuestionContext()

    return(
        <header className='flex items-center justify-between'>
            <div > 
                {
                    state?.category !== '' &&  
                    <div className='flex items-center'>
                        <Image
                            src={`/images/${state.category}.svg`}
                            alt='question-logo'
                            width={40}
                            height={40}
                        /> 
                        <p className='text-[18px] md:text-[28px] font-500 ml-[10px]'>{state.category}</p>
                    </div>
                }    
            </div>  
           
            <div className='flex items-center gap-[10px] md:gap-[20px]'>
                <Image
                    src={'/images/icon-sun-dark.svg'}
                    alt='light-mode'
                    width={20}
                    height={20}
                    className='md:hidden'
                />
                 <Image
                    src={'/images/icon-sun-dark.svg'}
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
                    src={'/images/icon-moon-dark.svg'}
                    alt='dark-mode'
                    width={20}
                    height={20}
                    className='md:hidden'
                />
                 <Image
                    src={'/images/icon-moon-dark.svg'}
                    alt='dark-mode'
                    width={30}
                    height={30}
                    className='hidden md:block'
                />
            </div>
        </header>
    )
}

export default Header;