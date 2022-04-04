import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Todo from "./Todo"

const TodoList = () => {
    const {items} = useContext(TodoContext)
    return (
        <ul className="todo-list">
            {items.length === 0 ? <div className="title">No Tasks</div> : items.map((el, index) => <Todo el={el} key={el.id}/>)}
        </ul>
    );
}

export default TodoList;