import { COLOR_CHANGE, STATUS_CHANGED } from "./actionTypes";


export const  statusChanged = (status) => {
    return {
        type : STATUS_CHANGED,
        payload : status,
    }
}
export const  colorChange = (color, changeType) => {
    return {
        type : COLOR_CHANGE,
        payload : {
            color,
            changeType
        }
    }
}

