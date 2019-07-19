import React from "react"

const BookCard = (props)=>{
    return (
            <div className="card">
                <h4>{props.data.title}</h4>
                <p>Written by {
                    props.data.authors
                        .map((author,index )=> {
                            return (index === (props.data.authors.length - 1)
                            ? `${author}.`
                            : `${author}, `)
                        })
                }</p>
                <img src={props.data.image} alt="bookImage"/>
                <p>{props.data.description}</p>
                <a className="button" href={props.data.link}>View</a>
                <button className="button" onClick={()=>{props.saveBook(props.data)}}> Save </button>
                
            </div>
    )
}

export default BookCard