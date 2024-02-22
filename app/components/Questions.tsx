import quizes from '../data.json'
import { QuizProps } from '../interface'
import Image from 'next/image'
import { useQuestionContext } from '../context/questionContext'
import { questionContextActionTypes } from '../context/questionReducer'
import ProgressBar from './ProgressBar'

const Questions = () => {
   
    const {dispatch, state} = useQuestionContext()
    console.log(state)

    return(
        <div className='lg:flex justify-between'>
            <div className='relative'>
                <p className='text-[14px] lg:text-[20px] text-[grey-navy] font-[300] italic'>Question 6 of 10</p>
                <h1 className='text-[20px] lg:text-[26px] font-[500] leading-[120%] lg:w-[55%] mt-[30px]'>
                    Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal 
                    text?
                </h1>
                <div className='lg:w-[65%] mt-[40px] lg:mt-[0] mb-[40px] lg:mb-[0] lg:absolute bottom-[50px]'>
                    <ProgressBar/>
                </div>
                
            </div>
            
           <div>
               <div className='space-y-4'>
                {
                    quizes?.quizzes.map((quiz:QuizProps)=>{
                        return(
                            <div 
                                className='bg-[white] dark:bg-navy rounded-[10px] flex items-center p-[20px] w-[100%] lg:w-[500px] m-auto cursor-pointer shadow-sm '
                                onClick={()=>dispatch({
                                    type: questionContextActionTypes.updateCategoryName,
                                    payload: {key:'category', data:quiz.title}
                                })}
                            >  
                                <Image
                                    src={`/images/${quiz.title}.svg`}
                                    alt='icon'
                                    className='object-fit'
                                    width={32}
                                    height={32}
                                />
                                <p className='text-dark-navy dark:text-white ml-[10px] text-xl'>{quiz.title}</p>
                            </div>
                        )
                    })
                }
               </div>
               <button
                className='w-[100%] bg-[#A729F5] rounded-[24px] text-[white] p-[20px] mt-[20px]'
               >
                   Submit Answer
                </button>
           </div>
        </div>
    )
}

export default Questions;