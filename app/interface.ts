import { Dispatch, SetStateAction } from "react";
import { questionContextActionTypes } from "./context/questionReducer";

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

export type ContextCurrentQuestionProps = {
  answer: string;
  question:string;
  options:string[]
}


export type Types = keyof typeof questionContextActionTypes
export type Payload = {key:keyof QuestionContextState, data:any }
export interface QuestionContextState {
  category: string,
  currentQuestion : ContextCurrentQuestionProps[]
}

export type Action = {
  payload?: Payload;
  type: Types
}

export interface CategoriesProps{
  setCurrentStage: Dispatch<SetStateAction<"default" | "question">>
}

export interface ProgressBarProps{
  currentQuestion: number
}
