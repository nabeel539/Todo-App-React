/* eslint-disable react/prop-types */
import { FaTrashCan } from "react-icons/fa6";

const style = {
    li:`flex justify-between bg-slate-200 font-medium p-4 my-2 capitalize rounded`,
    liComplete:`flex justify-between bg-slate-400 font-medium p-4 my-2 capitalize rounded`,
    row:`flex`,
    text:`ml-2 cursor-pointer`,
    textComplete:`ml-2 cursor-pointer line-through`,
    button:`cursor-pinter flex items-center p-3`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={()=> toggleComplete(todo)} type="checkbox"  checked={todo.completed ? 'checked' : ''}/>
            <p onChange={()=>toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button onClick={()=> deleteTodo(todo.id)}><FaTrashCan /></button>
    </li>
  )
}

export default Todo