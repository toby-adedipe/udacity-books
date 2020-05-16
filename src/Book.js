import React, {Component} from 'react';
import * as booksApi from './BooksAPI';
import Select from 'react-select';

class Book extends Component{
    state={
        value: {label: this.props.bookShelf, value:this.props.bookShelf } 
    }
    options=[
        {label: "Currently Reading", value: "CurrentlyReading"},
        {label: "Finished Reading", value: "read"},
        {label: "Want to read", value: "wantToRead"}
    ]
    updateShelf(book, shelf){
        booksApi.update(book, shelf).then(res=>(console.log(res)));
    }

    handleChange(value){
        this.setState(()=>({
            value
        }))
        console.log(this.state.value)
        this.updateShelf(this.props.book, JSON.stringify(value.value))
    }

    render(){
        const { bookTitle, bookAuthor, imageLink } = this.props
        return(
            <div>
                <img src={imageLink} alt={bookTitle} className="book-image"></img>
                <h4>{bookTitle}</h4>
                {bookAuthor.map((author)=>(
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