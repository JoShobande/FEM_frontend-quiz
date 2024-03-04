import quizes from '../data.json'
import { QuizProps } from '../interface'
import Image from 'next/image'
import { useQuestionContext } from '../context/questionContext'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import clsx from 'clsx'

const Questions = () => {
    const {state} = useQuestionContext()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>()
    const [selectedOption, setSelectedOption] = useState('')
    const [borderColor, setBorderColor] = useState('#A729F5')
    const [unansweredState, setUnansweredState] = useState(true)

    const indexToLetter = (index:number) => {
        return String.fromCharCode(97 + index); // 'a' has char code 97
    };

    const handleClickAnswer = (index:number, option:string) => { 
        if(unansweredState){
            setSubmitButtonDisabled(false)
            setSelectedAnswerIndex(index)
            setSelectedOption(option)
        } 
    }

    const handleSubmitAnswer = () => {  
        if(selectedOption === ''){
            setSubmitButtonDisabled(true)
        }else{
            let correctAnswerSelected = selectedOption === state.currentQuestion[currentQuestionIndex].answer
            correctAnswerSelected && setBorderColor ('#26D782')
            !correctAnswerSelected  && setBorderColor ('#EE5454')
            setUnansweredState(false)
        }     
    }   

    const handleSetCurrentQuestionIndex = () => {
        setCurrentQuestionIndex( currentQuestionIndex + 1)
        setUnansweredState(true)
        setSubmitButtonDisabled(true)
        setSelectedAnswerIndex(undefined)
        setSelectedOption('')
        setBorderColor('#A729F5')
        setSubmitButtonDisabled(false)
    }
    
    return(
        <div className='lg:flex justify-between'>
            <div className='relative lg:w-[500px]'>
                <p className='text-[14px] lg:text-[20px] text-[grey-navy] font-[300] italic'>Question {currentQuestionIndex+1} of {state.currentQuestion.length}</p>
                <h1 className='text-[20px] lg:text-[26px] font-[500] leading-[120%] l mt-[30px]'>
                    {
                        state.currentQuestion[currentQuestionIndex]?.question
                    }
                </h1>
                <div className='mt-[40px] lg:mt-[0] mb-[40px] lg:mb-[0] lg:absolute bottom-[50px]'>
                    <ProgressBar
                        currentQuestion={currentQuestionIndex}
                    />
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
                                        relative group bg-[white] dark:bg-navy rounded-[20px] flex items-center p-[15px] w-[100%] lg:w-[500px] m-auto cursor-pointer shadow-sm
                                   
                                    `}
                                    style={(selectedAnswerIndex === index) ? { border: `2px solid ${borderColor}` } : {}}
                                    onClick={()=>handleClickAnswer(index, option)}

                                >
                                    <div  
                                        className={clsx(
                                            'w-[50px] h-[50px] grid place-content-center rounded-[8px] bg-[#ededed] text-grey-navy ',
                                            {
                                              'group-hover:bg-[#F6E7FF] group-hover:text-purple': selectedAnswerIndex !== index
                                            },
                                        )}
                                        style={(selectedAnswerIndex === index) ? { backgroundColor: `${borderColor}`, color:'white'} : {}}
                                        
                                    >
                                        <p>
                                            {indexToLetter(index).toUpperCase()}
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p className='text-dark-navy dark:text-white ml-[10px] text-xl'>{option}</p>
                                        <div className='absolute right-[10px] top-[28px] '>
                                            {
                                                (selectedAnswerIndex === index) && (borderColor === '#EE5454') 
                                                ? 
                                                    <Image
                                                        src={'/images/icon-incorrect.svg'}
                                                        alt='wrong'
                                                        width={30}
                                                        height={30}
                                                    /> 
                                                : 
                                                    <> </>
                                            } 
                                             {
                                                (selectedAnswerIndex === index) && (borderColor === '#26D782') 
                                                ? 
                                                    <Image
                                                        src={'/images/icon-correct.svg'}
                                                        alt='wrong'
                                                        width={30}
                                                        height={30}
                                                    /> 
                                                : 
                                                    <> </>
                                            } 
                                        </div>
                                                   
                                    </div>
                                
                               </div>
                           )
                       })
                   }
               </div>
               <button
                    className={`w-[100%]  rounded-[24px] text-[white] p-[20px] mt-[20px] bg-[#A729F5] hover:bg-[#d394fa]`}
                    onClick={unansweredState ? handleSubmitAnswer : handleSetCurrentQuestionIndex}
               >
                   {unansweredState? 'Submit Answer' : 'Next Question'}
                </button>
                <div className='flex flex-col items-center mt-[30px]'>
                    {
                        submitButtonDisabled &&
                        <div className='flex items-center'>
                            <Image
                                src={'/images/icon-incorrect.svg'}
                                alt='wrong'
                                width={30}
                                height={30}
                            /> 
                            <p className='text-red'>Please select an answer</p>
                        </div>
                    }
                </div>
             
           </div>
        </div>
    )
}

export default Questions;