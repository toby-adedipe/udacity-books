import React, { Component } from 'react';
import * as booksApi from './BooksAPI';
import Book from './Book';

class WantToRead extends Component{
    state = {
        books: []
    }
    componentDidMount(){
        booksApi.getAll()
          .then((data)=>{
            this.setState(()=>({
                books:data
            }))
          });

        
      }
    render(){
        const { books } = this.state
        return(
            <div>
                <h1>Want To Read</h1>
                <div className="books-div">
                    {books.length !== 0 && 
                        books.map((book)=>(
                            book.shelf === 'wantToRead' &&
                            <Book key={book.id}
                                bookTitle={book.title}
                                bookAuthor={book.authors}
                                imageLink={book.imageLinks.thumbnail}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default WantToRead;