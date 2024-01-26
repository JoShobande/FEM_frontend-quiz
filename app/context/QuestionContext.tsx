'use client'

import {createContext, Dispatch, PropsWithChildren, useContext, useReducer} from 'react'
import { QuestionContextState } from '../interface'
import questionReducer, { initialState,} from './questionReducer'


const QuestionContext = createContext<{
    state:QuestionContextState;
    dispatch: Dispatch<{type:any; payload: any}>
}>({state:initialState, dispatch:()=> null})

export const QuestionProvider = ({children}:PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(questionReducer, initialState  )

    return(
        <QuestionContext.Provider value={{state, dispatch}}>
            {children}
        </QuestionContext.Provider>
    )
}

export const useQuestionContext = () => {
    const context = useContext(QuestionContext)

    if (context === undefined){
        throw new Error ('useQuestion context should be used within QuestionContext')
    }

    return context
}