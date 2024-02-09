
const ProgressBar = () => {
    return(
        <div className='relative bg-white dark:bg-navy w-full h-[18px] lg:h-[15px] rounded-[999px] flex justify-items-center items-center pl-[5px] pr-[5px]'>
            <div
                className={`h-[60%] w-[40%] bg-[#A729F5] rounded-[999px] lg:absolute`}
            />
        </div>
        
    )
}

export default ProgressBar;