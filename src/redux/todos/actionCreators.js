import { ADDED, TOGGLED, DELETE, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED } from "./actionTypes";


export const  added = (todoText) => {
    return {
        type : ADDED,
        payload : todoText
    }
}


export const  toggled = (todoId) => {
    return {
        type : TOGGLED,
        payload : todoId
    }
}

export const  deleted = (todoId) => {
    return {
        type : DELETE,
        payload : todoId
    }
}

export const  allCompleted = () => {
    return {
        type : ALL_COMPLETED,
    }
}

export const  clearCompleted = () => {
    return {
        type : CLEAR_COMPLETED,
    }
}

export const  colorSelected = (todoId, color) => {
    return {
        type : COLOR_SELECTED,
        payload : {
            todoId,
            color
        }
    }
}


