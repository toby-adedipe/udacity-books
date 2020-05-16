import React, { Component } from 'react';
import * as booksApi from './BooksAPI';
import Book from './Book';

class CurrentlyReading extends Component{
    state = {
        books: []
    }
    componentDidMount(){
        booksApi.getAll()
          .then((data)=>{
            this.setState(()=>({
                books:data
            }))
            console.log(data);
          });
    }

    render(){
        const { books } = this.state
        return(
            <div>
                <h1>Currently Reading</h1>
                <div className="books-div">
                    {books.length !== 0 && 
                        books.map((book)=>(
                            book.shelf === 'currentlyReading' &&
                            <Book key={book.id}
                                book={book}
                                bookTitle={book.title}
                                bookAuthor={book.authors}
                                imageLink={book.imageLinks.thumbnail}
                                bookShelf={book.shelf}
                                bookId={book.id}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default CurrentlyReading;