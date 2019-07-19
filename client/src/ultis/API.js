import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books")
    },
    addBook: (bookData) => {
        return axios.post("/api/books", bookData)
    },
    removeBook: (bookId) => {
        return axios.delete("/api/books", {
            params: {
                id: bookId
            }
        })
    },
    getGoogleBooks: (querry) => {
        const APIKey = process.env.REACT_APP_GOOGLE_BOOK_API_KEY
        const querryString = `https://www.googleapis.com/books/v1/volumes?q=${querry}&key=${APIKey}`
        return axios.get(querryString)
    }
}