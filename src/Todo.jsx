/* eslint-disable react/prop-types */
import { FaTrashCan } from "react-icons/fa6";

const style = {
    li:`flex justify-between bg-slate-200 font-medium p-1 my-2 px-3 capitalize rounded-full`,
    liComplete:`flex justify-between bg-slate-400 font-medium p-1 px-3 my-2 capitalize rounded-full`,
    row:`flex items-center`,
    text:`ml-2 cursor-pointer p-3`,
    textComplete:`ml-2 cursor-pointer p-3 line-through`,
    button:`p-3`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input 
              className="m-3"
              onChange={()=> toggleComplete(todo)} 
              type="checkbox"  
              checked={todo.completed ? 'checked' : ''}/>
            <p onChange={()=>toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button className={style.button}
            onClick={()=> deleteTodo(todo.id)}><FaTrashCan /></button>
    </li>
  )
}

export default Todo