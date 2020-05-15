import React, {Component} from 'react';

class Book extends Component{
    render(){
        const { bookTitle, bookAuthor, imageLink} = this.props
        return(
            <div>
                <img src={imageLink} alt={bookTitle} className="book-image"></img>
                <h4>{bookTitle}</h4>
                {bookAuthor.map((author)=>(
                    <p key={author}>{author}</p>
                ))}
            </div>
        )
    }
}

export default Book