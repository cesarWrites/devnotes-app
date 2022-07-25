import React, {useEffect, useState} from "react";
import axios from 'axios';

function Books(){
    const[books, setBooks] = useState([])

    useEffect(()=>{
        getBookDetails();
    }, [])
    const getBookDetails =() =>{
        axios
        .get('http://localhost:3000/books')
        .then((res)=>{
            console.log(res);
            setBooks(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  
    };

    return(
        <div className="tech-tips">
            <div className="tips-container">
            {books.map((book) => (
                    <div className="tips-det" key = {book.id}>
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <h3>{book.subject}</h3>
                        </div>
                ))}
                </div>
        </div>
    )
}

export default Books;