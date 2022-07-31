import React, {useEffect, useState} from "react";
import axios from 'axios';

function Books(){
    const[books, setBooks] = useState([])

    useEffect(()=>{
        getBookDetails();
    }, [])
    const getBookDetails =() =>{
        axios
        .get('https://devnotes-backend-app.herokuapp.com/books')
        .then((res)=>{
            console.log(res);
            setBooks(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  
    };

    return(
        <div className="tech-books">
            <div className="books-container">
            {books.map((book) => (
                    <div className="books-det" key = {book.id}>
                        <h2>{book.title}</h2>
                        <div className="books-auth-det">
                            <div className="book-img">
                                <img src={book.bookUrl} alt="book url"/>
                                </div>
                        <div className="book-item-det">
                        <h3>Author:{book.author}</h3>
                        <h3>Topic:{book.subject}</h3>
                        </div>
                        </div>
                        </div>
                ))}
                </div>
        </div>
    )
}

export default Books;