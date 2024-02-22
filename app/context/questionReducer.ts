import { Action, QuestionContextState } from "../interface";


export const questionContextActionTypes = {
    updateCategoryName: 'UPDATE_CATEGORY_NAME',
    updateQuestionSet: 'UPDATE_QUESTION_SET'
}

export const initialState:QuestionContextState = {
    category: '',
    currentQuestion : []
}

const questionReducer = (state=initialState, action:Action) => {
    const {type, payload} = action
    switch(type){
        case questionContextActionTypes.updateCategoryName:
        return {...state, category: payload?.data}

        case questionContextActionTypes.updateQuestionSet:
        return {...state, currentQuestion: payload?.data}
        
        default:
            return state
    }
}

export default questionReducer;