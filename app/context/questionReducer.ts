import { Action, QuestionContextState } from "../interface";


export const questionContextActionTypes = {
    updateCategoryName: 'UPDATE_CATEGORY_NAME'
}

export const initialState:QuestionContextState = {
    category: '',
    CurrentQuestion : []
}

const questionReducer = (state=initialState, action:Action) => {
    const {type, payload} = action
    switch(type){
        case questionContextActionTypes.updateCategoryName:
        return {...state, category: payload?.data}
        
        default:
            return state
    }
}

export default questionReducer;