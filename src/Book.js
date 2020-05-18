import React, {Component} from 'react';
import Select from 'react-select';
import Background from './icons/arrow-drop-down.svg';
class Book extends Component{
    state={
        value: {label: this.props.book.shelf, value:this.props.book.shelf } 
    }
    options=[
        {label: "Currently Reading", value: "currentlyReading"},
        {label: "Want to read", value: "wantToRead"},
        {label: "Finished Reading", value: "read"},
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
        const customStyles = {
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected ? 'darkred' : 'black',
              backgroundColor: state.isSelected ? 'lavender' : 'white'
            }),
            control: (provided) => ({
              ...provided,
              backgroundImage: `url(${Background})`
            })
          }

        return(
            <div className="book-section">
                <img src={book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/224x298'} alt={book.title} className="book-image"></img>
                <h4>{book.title}</h4>
                {book.authors && book.authors.map((author)=>(
                    <p key={author}>{author}</p>
                ))}

                <Select 
                    options={this.options}
                    value={this.state.value}
                    onChange={value => this.handleChange(value)}
                    defaultValue={this.state.value}
                    styles={ customStyles }
                />
            </div>
        )
    }
}

export default Book