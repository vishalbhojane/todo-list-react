import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Form = () => {
    const { inputData, isEditing, setInputData, handleAdd, handleCancle } = useContext(TodoContext)

    return (
        <form className="form" onKeyDown={(e) => {if (e.key === "Enter") {e.preventDefault(); handleAdd() } if (e.key === "Escape") {handleCancle()}}}>
            <input type="text" placeholder="Write here" className="form-control" value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
            {isEditing ? <i className="cta pos-abs-v fa-solid fa-check" onClick={() => { handleAdd() }}></i> : <i className="pos-abs-v cta fa-solid fa-plus" onClick={() => { handleAdd() }}></i>}
        </form>
    );
}

export default Form;