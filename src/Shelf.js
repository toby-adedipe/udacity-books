import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component{
    
    render(){
        const { books, onUpdateShelf} = this.props
        return(
            <div  className="container">
                <h1>Currently Reading</h1>
                <div className="books-div">
                    {books.map((book)=>(
                        book.shelf === 'currentlyReading' &&
                        <Book key={book.id}
                            book={book}
                            onUpdateShelf={onUpdateShelf}
                            label = {"Currently Reading"}
                        />
                    ))}
                </div>
                <h1>Want To Read</h1>
                <div className="books-div">
                    {books.map((book)=>(
                        book.shelf === 'wantToRead' &&
                        <Book key={book.id}
                            book={book}
                            onUpdateShelf={onUpdateShelf}
                            label = {"Want to Read"}
                        />
                    ))}
                </div>
                <h1>Finished Read</h1>
                <div className="books-div">
                    {books.map((book)=>(
                        book.shelf === 'read' &&
                        <Book key={book.id}
                            book={book}
                            onUpdateShelf={onUpdateShelf}
                            label = {"Finished Reading"}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Shelf;