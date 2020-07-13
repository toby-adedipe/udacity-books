import React from 'react';

function Book (props){

    function handleChange(event, book){
        props.onUpdateShelf(book, event.target.value)
    }
    const { book } = props

    return(
        <div className="book-section">
            <img src={book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/224x298'} alt={book.title} className="book-image"></img>
            {/* <p>{book.title}</p>
            {book.authors && book.authors.map((author)=>(
                <p key={author}>{author}</p>
            ))} */}
            <select onChange={event => handleChange(event, book)} value={book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            <div className="select-btn"><i className="fa fa-angle-down" aria-hidden="true"></i></div>
        </div>
    )
}


export default Book