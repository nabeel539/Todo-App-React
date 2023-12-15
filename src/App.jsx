/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa6";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-gray-800 p-4 text-center`,
  form: `flex justify-between items-center`,
  input: `border p-4 w-full text-xl  rounded`,
  button: `border p-4 ml-2 bg-purple-600 text-slate-100 rounded`,
  count: `text-center p-2 font-medium`,
  copyright:`text-white text-xs fixed bottom-0 w-full`
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // 1. Create TODOS
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // 2. Read todos
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArr);
    });
    return () => unsubscribe;
  }, []);

  // 3. Update todos
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  // 4. Delete  todos
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <>
      <div className={style.bg}>
        <div className={style.container}>
          <h3 className={style.heading}>Todo App</h3>
          <form onSubmit={createTodo} className={style.form}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Add Todo"
            />
            <button className={style.button}>
              <FaPlus size={30} />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>

          {todos.length < 1 ? null : (
            <p className={style.count}>{`You have ${todos.length} todos`}</p>
          )}
        </div>
        <footer className={style.copyright}>
            <p className="text-center p-3">Made With ❤️ By MD. NABEEL AHEMAD</p>
        </footer>
      </div>
    </>
  );
}

export default App;
