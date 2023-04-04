import initialState from "./initialState";
import { ADDED, DELETE, CLEAR_COMPLETED, COLOR_SELECTED, TOGGLED, ALL_COMPLETED } from "./actionTypes";

const nextTodoId = (todoList) => {
    const maxId = todoList.reduce((maxId,todo)=>Math.max(todo.id, maxId), -1)
    return maxId + 1;
}

const todoReducer = (state= initialState, action) =>{
    switch (action.type) {
        case ADDED:

            const newTodos = [...state, {
                id : nextTodoId(state),
                text : action.payload,
                completed : false
            }]
            return newTodos;
    
        case DELETE : 
            const UpdateDeletedTodos = state.filter(todo => todo.id !== action.payload)
            return UpdateDeletedTodos;
        
        case COLOR_SELECTED:
            const {todoId, color} = action.payload
            const colorSelectedTodos = state.map((todo)=>{
                if(todo.id !== todoId){
                    return todo;
                }
                return {
                    ...todo,
                    color : color
                }
            })
            return colorSelectedTodos;
        case TOGGLED:
            const toggledTodos = state.map((todo)=>{
                if(todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed : !todo.completed
                }
            });

            return toggledTodos;

        case ALL_COMPLETED:
            const allCompletedTodos = state.map(todo => {
                return {
                    ...todo,
                    completed : true
                }
            })
            return allCompletedTodos;
        case CLEAR_COMPLETED:
            const  clearCompleted = state.filter(todo => todo.completed !== true)
            return clearCompleted;
        
        default:
        return state;
    }
}

export default todoReducer;