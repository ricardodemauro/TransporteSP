import { combineReducers } from 'redux'
import { errorMessage } from './miscReducers'

const dReducer = (state = {}, action) => {
    return state
}

const reducer = combineReducers({
    dReducer,
    errorMessage
})


export default reducer