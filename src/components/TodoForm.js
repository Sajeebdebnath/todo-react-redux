import noteIcon from "../assets/images/notes.png"
import plusIcon from "../assets/images/plus.png"
import {useState} from "react"
import { useDispatch } from "react-redux";
import { added } from "../redux/todos/actionCreators";
const TodoForm = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const changeHanlder = (e) =>{
        setInput(e.target.value)
        
    }
    const submitHanlder = (e) => {
        e.preventDefault()
        dispatch(added(input))
        setInput("")

    } 
    return (
        <form
                        className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={submitHanlder}
                    >
                        <img
                            src={noteIcon}
                            className="w-6 h-6"
                            alt="Add todo"
                        />
                        <input
                            type="text"
                            placeholder="Type your todo"
                            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                            onChange={changeHanlder}
                            value={input}
                        />
                        <button
                            type="submit"
                            className={`appearance-none w-8 h-8 bg-[url('${plusIcon}')] bg-no-repeat bg-contain`}
                        ></button>
                    </form>
    );
};

export default TodoForm;