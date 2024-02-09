'use client'
import { useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Questions from "./components/Questions";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)
  const [currentStage, setCurrentStage] = useState<'default' | 'question'>('default')

  const handleRenderCurrentStage = () => {
    switch (currentStage) {
      case 'default':
        return <Categories setCurrentStage={setCurrentStage}/>
      case 'question':
        return <Questions/>
      default:
        break;
    }
  }

  return (
    <main className={`bg-[#F4F6FA] text-dark-navy dark:bg-dark-navy dark:text-[white] h-[100vh] ${darkMode && 'dark'}`}>
      <div 
        className={`
            bg-[url('/pattern-background-mobile-light.svg')] dark:bg-[url('/pattern-background-mobile-dark.svg')]
            lg:bg-[url('/pattern-background-desktop-light.svg')] lg:dark:bg-[url('/pattern-background-desktop-dark.svg')]  
            bg-no-repeat bg-cover bg-[#F4F6FA]  
            text-dark-navy dark:bg-dark-navy dark:text-[white] h-[100vh]
          `}
      >
        <div className='w-[90%] lg:w-[80%] m-auto pt-[30px] lg:pt-[50px]'>
          <Header
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
          <div className='mt-[50px] lg:mt-[100px]'>
            {handleRenderCurrentStage()}
          </div>
        </div>
       
        
      </div> 
    </main>
  )
}
