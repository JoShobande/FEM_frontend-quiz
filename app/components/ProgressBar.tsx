import { ProgressBarProps } from "../interface";
import { useQuestionContext } from '../context/questionContext'

const ProgressBar:React.FC<ProgressBarProps> = ({currentQuestion}) => {
   
    const {state} = useQuestionContext()
    let progressWidth = ((currentQuestion + 1) / (state.currentQuestion.length)) * 100
    console.log(progressWidth)

    return(
        <div className='relative bg-white dark:bg-navy w-[100%] h-[18px] lg:h-[15px] rounded-[999px] flex justify-items-center items-center pl-[5px] pr-[5px]'>
            <div
                className={`h-[60%]  bg-[#A729F5] rounded-[999px] lg:absolute`}
                style={{width: `${progressWidth}%`}}
            />
        </div>
        
    )
}

export default ProgressBar;