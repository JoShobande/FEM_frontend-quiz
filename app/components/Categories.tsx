'use client'

import quizes from '../data.json'
import { CategoriesProps, QuizProps } from '../interface'
import Image from 'next/image'
import { useQuestionContext } from '../context/questionContext'
import { questionContextActionTypes } from '../context/questionReducer'


const Categories:React.FC<CategoriesProps> = ({setCurrentStage}) => {

   const {dispatch} = useQuestionContext()
   
   const handleSelectCategory = (quizTitle:string) => {
       setCurrentStage('question')
       dispatch({
        type: questionContextActionTypes.updateCategoryName,
        payload: {key:'category', data:quizTitle}
       })
    }

    return(
        <div className='lg:flex justify-between'>
            <div>
                <h1 className='text-[40px] lg:text-[64px] font-[300] leading-[100%] '>Welcome to the</h1>
                <h1 className='text-[40px] lg:text-[64px] font-[500] leading-[100%] '>Frontend Quiz!</h1>
                <p className='text-[14px] lg:text-[20px] text-grey-navy italic font-[300] mt-[20px] lg:mt-[80px] mb-[40px] lg:mb-[0] dark:text-[#ABC1E1]'>Pick a subject to get started.</p>
            </div>
           <div>
               <div className='space-y-4'>
                {
                    quizes?.quizzes.map((quiz:QuizProps, index)=>{
                        return(
                            <div 
                                key={index}
                                className='bg-[white] dark:bg-navy rounded-[10px] flex items-center p-[20px] w-[100%] lg:w-[500px] m-auto cursor-pointer '
                                onClick={()=>handleSelectCategory(quiz.title)}
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
           </div>
        </div>
    )
}

export default Categories;