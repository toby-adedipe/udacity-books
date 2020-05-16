import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Shelf from './Shelf';
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
      // Object.keys(res).map(key=>console.log(res[key]))
      // console.log(this.state.books.map((f)=>()));
      // console.log(book)
      // this.setState((prevState)=>({
      //   books:[]
      // }))

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
      </div>
    );
  }
}

export default App;
