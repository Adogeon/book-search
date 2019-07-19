import React from "react";
import Banner from "../../components/Banner"
import SearchBar from "../../components/SearchBar"
import BookList from "../../components/BookList"

function SearchPage() {
    return(
        <div className="container">
            <Banner/>
            <SearchBar/>
            <BookList label="Result List"/>
        </div>
    )
}

export default SearchPage