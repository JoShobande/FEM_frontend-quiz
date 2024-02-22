'use client'

import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Questions from "./components/Questions";
import { useQuestionContext } from "./context/questionContext";
import { questionContextActionTypes } from "./context/questionReducer";
import quizes from './data.json'


export default function Home() {
  
  const [darkMode, setDarkMode] = useState(false)
  const [currentStage, setCurrentStage] = useState<'default' | 'question'>('default')

  const {dispatch, state} = useQuestionContext()

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

  const handleAddCategoryQuestion = () => {
    let localQuestionSet = quizes.quizzes.filter((item)=>item.title === state.category)
    dispatch({
        type: questionContextActionTypes.updateQuestionSet,
        payload: {key:'currentQuestion', data:localQuestionSet[0].questions}
    })

  } 

  useEffect(()=>{
    if(state.category !== ''){
        handleAddCategoryQuestion()
    }
   },[state.category])

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
