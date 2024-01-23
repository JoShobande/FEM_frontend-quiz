import { Dispatch, SetStateAction } from "react";

export interface HeaderComponentProps{
    setDarkMode: Dispatch<SetStateAction<boolean>>
    darkMode: boolean
}


export type QuizProps = {
  title: string
  icon: string
  questions: {
    question: string
    options: string[]
    answer: string
  }[]
}
