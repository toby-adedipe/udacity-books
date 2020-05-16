import React, {Component} from 'react';
import * as booksApi from './BooksAPI';
import Select from 'react-select';

class Book extends Component{
    state={
        value: {label: this.props.book.shelf, value:this.props.book.shelf } 
    }
    options=[
        {label: "Currently Reading", value: "currentlyReading"},
        {label: "Finished Reading", value: "read"},
        {label: "Want to read", value: "wantToRead"},
        {label: "None", value: ""}
    ]

    handleChange(value){
        this.setState(()=>({
            value
        }))
        this.props.onUpdateShelf(this.props.book, value.value)
    }

    render(){
        const { book } = this.props
        return(
            <div>
                <img src={book.imageLinks.thumbnail} alt={book.title} className="book-image"></img>
                <h4>{book.title}</h4>
                {book.authors.map((author)=>(
                    <p key={author}>{author}</p>
                ))}

                <Select 
                    options={this.options}
                    value={this.state.value}
                    onChange={value => this.handleChange(value)}
                    defaultValue={this.state.value}
                />
            </div>
        )
    }
}

export default Book