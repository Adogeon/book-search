import React from "react"
import Banner from "../../components/Banner"
import BookList from "../../components/BookList"
import API from "../../ultis/API";

class SavePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books:[],
            bookToSave:{}
        }
    }

    loadBooks() {
        API.getBooks()
           .then(res=> this.setState({ books:res.data}))
           .catch(err => console.log(err))
    }

    handleRemoveBook( bookId) {
        API.removeBook (bookId)
           .then(res => this.loadBooks())
           .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadBooks()
    }

    render() {
        return (
            <div className="container">
                <Banner />
                <BookList label="Saved Books" data={this.state.books} />
            </div>
        )
    }
}

export default SavePage