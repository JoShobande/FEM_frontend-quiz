import quizes from '../data.json'
import { QuizProps } from '../interface'

const Categories = () => {

    return(
        <div className='flex justify-between'>
            <div>
                <h1 className='text-[64px] font-[300] leading-[100%] '>Welcome to the</h1>
                <h1 className='text-[64px] font-[500] leading-[100%] '>Frontend Quiz!</h1>
                <p className='text-[20px] text-grey-navy italic font-[300] mt-[80px] dark:text-[#ABC1E1]'>Pick a subject to get started.</p>
            </div>
           <div>
               {
                 quizes?.quizzes.map((quiz:QuizProps)=>{
                     return(
                         <div>
                             <p>{quiz.title}</p>
                         </div>
                     )
                 })
               }
           </div>
        </div>
    )
}

export default Categories;