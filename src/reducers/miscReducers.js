import * as types from '../misc/ActionTypes'

export const errorMessage = (state = null, action) => {
    const { type, error } = action

    if (type === types.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }

    return state
}