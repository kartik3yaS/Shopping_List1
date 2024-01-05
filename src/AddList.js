import { FaPlus } from "react-icons/fa";

const AddItem = () => {
    return (
        <form className="addForm">
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                id="addItem"
                type="text"
                placeholder="Addi Item"
                required
            />
            <FaPlus />
        </form>
    )
}

export default AddItem;