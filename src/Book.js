import React, {Component} from 'react';

class Book extends Component{
    
    handleChange(value){
        this.props.onUpdateShelf(this.props.book, value.value)
    }

    render(){
        const { book } = this.props

        return(
            <div className="book-section dropdown-btn">
                <img src={book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/224x298'} alt={book.title} className="book-image"></img>
                <h4>{book.title}</h4>
                {book.authors && book.authors.map((author)=>(
                    <p key={author}>{author}</p>
                ))}
                <select onChange={value => this.handleChange(value)} value={book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Book