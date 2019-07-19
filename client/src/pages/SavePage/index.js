import React from "react"
import Banner from "../../components/Banner"
import BookList from "../../components/BookList"

const SavePage = () => {
    return (
        <div className = "container">
            <Banner />
            <BookList label="Saved Books" />
        </div>
    )
}

export default SavePage