import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Shelf from './Shelf';
import Search from './Search';
import { Route } from 'react-router-dom';
import * as booksApi from './BooksAPI';

class  App extends Component {
  state={
    books:[]
  }

  componentDidMount(){
    booksApi.getAll()
      .then((data)=>{
        this.setState(()=>({
            books:data
        }))
      });
  }

  updateShelf(book, shelf){
    booksApi.update(book, shelf)
    .then(res=>{
      let objIndex = this.state.books.findIndex((obj)=> obj.id === book.id);
      if(objIndex === -1){
        this.setState((prevState)=>({
          books:[...prevState.books, [book]]
        }))
      }else{
        let oldState = this.state.books;
        oldState[objIndex].shelf = shelf;
        this.setState(()=>({
          state: oldState
        }))
      }
    });
  }

  render(){
    return (
      <div className="App">
        <Route exact path ='/' render={()=>(
          <div>
            <Header />
            <Shelf 
              books={this.state.books}
              onUpdateShelf={(book, shelf)=>this.updateShelf(book, shelf)}
            />
          </div>
        )}
        />
        <Route path="/search" render={()=>(
          <Search
            books={this.state.books} 
            onUpdateShelf={(book, shelf)=>this.updateShelf(book,shelf)}
          />
        )}
        />
      </div>
    );
  }
}

export default App;
