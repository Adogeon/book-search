import React from "react"
import BookCard from "../BookCard"

const BookList = (props)=> {
    return(
        <div>
            <h3>{props.label}</h3>
            {
                props.data.map(
                    bookData => <BookCard data={bookData} saveBook={props.onSaveBook}/>
                )
            }
        </div>
    )
}

export default BookList