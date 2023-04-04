import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {statusChanged, colorChange} from "../redux/filters/actionCreators"


const numberOfTodos=(todos) =>{
    switch(todos){
        case 0:
            return "No task"
        case 1:
            return "1 task"
        default:
            return `${todos} tasks`

    }
}

const TodoFooter = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    const {status , colors} = filters
    const remainingTodos = todos.filter( todo => !todo.completed).length

    const statusHandler = (status) => {
        dispatch(statusChanged(status))
    }

    const colorHanlder = (color) => {
        if(colors.includes(color)){
            dispatch(colorChange(color, 'removed'))
        }
        else{
            dispatch(colorChange(color,'added'))
        }

    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <p>{ numberOfTodos(remainingTodos)} left</p>
                    <ul className="flex space-x-1 items-center text-xs">
                        <li className={`cursor-pointer ${status === 'All' && "font-bold"}`} onClick={()=>statusHandler('All')}>All</li>
                        <li>|</li>
                        <li className={`cursor-pointer ${status === 'Incomplete' && "font-bold"}`} onClick={()=>statusHandler('Incomplete')}>Incomplete</li>
                        <li>|</li>
                        <li className={`cursor-pointer ${status === 'Complete' && "font-bold"}`} onClick={()=>statusHandler('Complete')}>Complete</li>
                        <li></li>
                        <li></li>
                        <li
                            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                            onClick={()=> colorHanlder("green")}
                        ></li>
                        <li
                            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                            onClick={()=> colorHanlder("red")}
                        ></li>
                        <li
                            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                            onClick={()=> colorHanlder("yellow")}
                        ></li>
                    </ul>
                </div>
    );
};

export default TodoFooter;