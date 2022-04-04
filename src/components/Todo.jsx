import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = ({ el}) => {
    const { handleDelete, handleComplete, handleEditStatus, completedHidden, editingItem} = useContext(TodoContext)
    let editingClass = null
    editingItem.id === el.id ? editingClass = " editing" : editingClass = ""
    return (
        <li className={`todo-item${el.complete ? " completed" : ""}${el.complete && completedHidden ? " hidden" : ""}${editingClass}`} key={el.id}>
            <p>{el.title}</p>
            <div className="cta-container">
                {!(el.id === editingItem.id) && (el.complete ? <i className="cta fa-solid fa-rotate-right" onClick={() => { handleComplete(el.id) }}></i> : <i className="cta fa-solid fa-check" onClick={() => { handleComplete(el.id) }}></i>)}
                {!(el.id === editingItem.id) && el.complete === false && <i className="cta fa-solid fa-pen-to-square" onClick={() => { handleEditStatus(el.id) }}></i>}
                {<i className="cta fa-solid fa-trash-can" onClick={() => handleDelete(el.id)}></i>}
            </div>
        </li>
    );
}

export default Todo;