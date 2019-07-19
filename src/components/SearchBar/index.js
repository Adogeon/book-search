import React from "react"


const SearchBar = () => {
    return(
        <form>
            <h2>Book Search</h2>
            <label for="searchTerm">Book: </label>
            <input type="text" name="searchTerm"></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar