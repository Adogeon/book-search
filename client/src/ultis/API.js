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
    }
}