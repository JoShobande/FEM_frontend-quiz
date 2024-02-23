import quizes from '../data.json'
import { QuizProps } from '../interface'
import Image from 'next/image'
import { useQuestionContext } from '../context/questionContext'
import ProgressBar from './ProgressBar'
import { useState } from 'react'

const Questions = () => {
    const {state} = useQuestionContext()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>()
    const [selectedOption, setSelectedOption] = useState('')
    const [borderColor, setBorderColor] = useState('#A729F5')

    const indexToLetter = (index:number) => {
        return String.fromCharCode(97 + index); // 'a' has char code 97
    };

    const handleClickAnswer = (index:number, option:string) => {
        setSubmitButtonDisabled(false)
        setSelectedAnswerIndex(index)
        setSelectedOption(option)
    }

    const handleSubmitAnswer = () => {
        let correctAnswerSelected = selectedOption === state.currentQuestion[currentQuestionIndex].answer
        correctAnswerSelected && setBorderColor ('#26D782')
        !correctAnswerSelected  && setBorderColor ('#EE5454')
    }   

  


    const handleSetCurrentQuestionIndex = () => {
        setCurrentQuestionIndex( currentQuestionIndex + 1)
    }
    
   

    return(
        <div className='lg:flex justify-between'>
            <div className='relative'>
                <p className='text-[14px] lg:text-[20px] text-[grey-navy] font-[300] italic'>Question 6 of 10</p>
                <h1 className='text-[20px] lg:text-[26px] font-[500] leading-[120%] lg:w-[55%] mt-[30px]'>
                    {
                        state.currentQuestion[currentQuestionIndex]?.question
                    }
                </h1>
                <div className='lg:w-[65%] mt-[40px] lg:mt-[0] mb-[40px] lg:mb-[0] lg:absolute bottom-[50px]'>
                    <ProgressBar/>
                </div>
                
            </div>
            
           <div>
               <div className='space-y-4'>
                   {
                       state.currentQuestion[currentQuestionIndex]?.options?.map((option, index)=>{
                           return(
                               <div     
                                    key={index}
                                    className={`
                                        group bg-[white] dark:bg-navy rounded-[10px] flex items-center p-[20px] w-[100%] lg:w-[500px] m-auto cursor-pointer shadow-sm
                                   
                                    `}
                                    style={(selectedAnswerIndex === index) ? { border: `2px solid ${borderColor}` } : {}}
                                    onClick={()=>handleClickAnswer(index, option)}

                                >
                                    <div  
                                        className={`
                                            w-[50px] h-[50px] grid place-content-center rounded-[8px] 
                                            ${selectedAnswerIndex === index ? `{bg-purple text-[${borderColor}]}` : 'bg-[#ededed] text-grey-navy group-hover:bg-[#F6E7FF] group-hover:text-purple' }
                        
                                        `}
                                        style={(selectedAnswerIndex === index) ? { backgroundColor: `${borderColor}`} : {}}
                                    >
                                        <p>
                                            {indexToLetter(index).toUpperCase()}
                                        </p>
                                    </div>
                                   
                                    <p className='text-dark-navy dark:text-white ml-[10px] text-xl'>{option}</p>
                               </div>
                           )
                       })
                   }
               </div>
               <button
                    className={`
                        w-[100%]  rounded-[24px] text-[white] p-[20px] mt-[20px]
                        ${submitButtonDisabled ? 'bg-[#d394fa]' : 'bg-[#A729F5]'}
                    `}
                    disabled={submitButtonDisabled}
                    onClick={handleSubmitAnswer}
               >
                   Submit Answer
                </button>
           </div>
        </div>
    )
}

export default Questions;