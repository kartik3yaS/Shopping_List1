import { FaSearch } from "react-icons/fa";

const searchItem = ({search, setSearch}) => {
    return(
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchItem">Search Item</label>
            <input
                id="searchItem"
                type="text"
                placeholder="Search Item"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Search-Item"
            >
                <FaSearch />
            </button>
        </form>
    )
}

export default searchItem;