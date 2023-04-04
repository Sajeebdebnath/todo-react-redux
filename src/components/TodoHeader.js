import React from 'react';
import { useDispatch } from 'react-redux';
import doubleTickIcon from "../assets/images/double-tick.png"
import TodoForm from './TodoForm';
import {allCompleted, clearCompleted} from "../redux/todos/actionCreators"

const TodoHeader = () => {
    const dispatch = useDispatch()

    const allCompleteHanlder = () => {
        dispatch(allCompleted())
    }

    const clearCompleteHanlder = () => {
        dispatch(clearCompleted())
    }
    return (
        <div>
                    <TodoForm />

                    <ul className="flex justify-between my-4 text-xs text-gray-500">
                        <li className="flex space-x-1 cursor-pointer" 
                            onClick={()=> allCompleteHanlder()}
                        >
                            <img
                                className="w-4 h-4"
                                src={doubleTickIcon}
                                alt="Complete"
                            />
                            <span>Complete All Tasks</span>
                        </li>
                        <li className="cursor-pointer" onClick={()=> clearCompleteHanlder()}>Clear completed</li>
                    </ul>
                </div>
    );
};

export default TodoHeader;