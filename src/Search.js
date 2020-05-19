import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as booksApi from './BooksAPI';
import Book from './Book';

class Search extends Component{
    state={
        result:[],
        error: ''
    }

    onChange(input){
        if(input.length > 0){
            booksApi.search(input)
            .then(res=>{
                if(res.error){
                    this.setState({
                        result:[],
                        error: "We are sorry, we can't find your book"
                    })
                }else{
                    const books = res.map((book)=>{
                        if (res){}
                        const bookOnShelf = this.props.books.filter(bookOnShelf=> bookOnShelf.id === book.id);
                        book.shelf = "none"
                        return bookOnShelf.length > 0 ? bookOnShelf[0] : book;
                    })
                    this.setState(()=>({
                        result:books,
                        error:''
                    }))
                }
            })
            .catch();
        }else{
            this.setState(()=>({
                result:[]
            }))
        }
    }

    render(){
        const { onUpdateShelf } = this.props;
        return(
            <div>
                <div className="search-header">
                    <Link to="/">
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </Link>
                    <input 
                        placeholder="Search for Book Title or Author"
                        type="text"
                        className="search-input" 
                        value={this.state.input} 
                        onChange={event=>(this.onChange(event.target.value))}
                        >
                    </input>
                </div>
                <div className="search-books-div">
                    {this.state.error.length > 0 &&
                        <p className="error-message">{this.state.error}</p>
                    }
                    {this.state.result.length > 0 &&
                    this.state.result.map((book)=>(
                        <Book
                            key={book.id} 
                            book={ book } 
                            onUpdateShelf = {onUpdateShelf}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Search;