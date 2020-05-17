import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component{
    
    render(){
        const { books, onUpdateShelf} = this.props
        return(
            <div  className="container">
                <h1>Currently Reading</h1>
                {books.map((book)=>(
                    book.shelf === 'currentlyReading' &&
                    <Book key={book.id}
                        book={book}
                        onUpdateShelf={onUpdateShelf}
                    />
                ))}
                <h1>Want To Read</h1>
                {books.map((book)=>(
                    book.shelf === 'wantToRead' &&
                    <Book key={book.id}
                        book={book}
                        onUpdateShelf={onUpdateShelf}
                    />
                ))}
                <h1>Finished Read</h1>
                {books.map((book)=>(
                    book.shelf === 'read' &&
                    <Book key={book.id}
                        book={book}
                        onUpdateShelf={onUpdateShelf}
                    />
                ))}
            </div>
        )
    }
}

export default Shelf;