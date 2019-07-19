import React from "react";

const SearchPage = () => {
    return(
        <div className="container">
            <Banner/>
            <SearchBar/>
            <BookList label="Result List"/>
        </div>
    )
}

export default SearchPage