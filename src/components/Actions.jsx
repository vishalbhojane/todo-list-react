import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = () => {
    const { items, handleRemoveAll, setCompletedHidden, sortItems, completedHidden, hasCompletedTasks } = useContext(TodoContext)

    return (
        <>
            <div className="cta-container">
                {
                    items.length > 0 ? <>
                        {items.length > 1 && <button className="btn btn-sort" onClick={() => { sortItems(items) }}>Sort</button>}
                        {hasCompletedTasks && <button className="btn btn-hide" onClick={() => { setCompletedHidden(!completedHidden) }}>{completedHidden ? "" : "hide"} Completed</button>}
                        <button className="btn btn-remove" onClick={handleRemoveAll}>Reset</button>
                    </> : ""
                }
            </div>
        </>
    );
}
export default Todo;