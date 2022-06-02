import { useContext} from "react";
import TodoContext from "../context/TodoContext";

const Todo = () => {
    const { items, setCompletedHidden, sortItems, setItems, completedHidden, hasCompletedTasks, isEditing, handleAdd, handleCancle,removeConfirm, setRemoveConfirm } = useContext(TodoContext)

    return (
        <>
            <div className="cta-container">
                {
                    isEditing ? <><button className="btn btn-hide" onClick={handleAdd}>Update</button><button className="btn btn-remove" onClick={handleCancle}>Cancel</button></> :
                    items.length > 0 ? <>
                        {items.length > 1 && !removeConfirm && <button className="btn btn-sort" onClick={() => { sortItems(items) }}>Sort</button>}
                        {hasCompletedTasks && !removeConfirm && <button className="btn btn-hide" onClick={() => { setCompletedHidden(!completedHidden) }}>{completedHidden ? "View" : "hide"} Completed</button>}
                        {!removeConfirm ? <button className="btn btn-remove" onClick={() => setRemoveConfirm(true)}>Reset</button> : <><button className="btn btn-remove" onClick={() => { setItems([]); setRemoveConfirm(false) }}>Yes, Remove Everything</button><button className="btn btn-hide" onClick={() => { setRemoveConfirm(false) }}>No</button></>}
                    </> : ""
                }
            </div>
        </>
    );
}
export default Todo;