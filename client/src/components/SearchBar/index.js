import React from "react"


const SearchBar = (props) => {
    return(
        <form onSubmit={props.onSearchSubmit}>
            <h2>Book Search</h2>
            <label htmlFor="searchTerm">Book: </label>
            <input type="text" name="searchTerm" onChange={props.onTextChange}></input>
            <button type="submit" onSubmit={props.onSearchSubmit}>Search</button>
        </form>
    )
}

export default SearchBar