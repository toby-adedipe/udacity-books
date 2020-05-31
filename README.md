# My-Books Project

This project is website that functions like a librabry. You can search for a book and add it to the library under 3 sections, the ones you "Want to read", the ones you've "read" and the ones you are "currently reading".

## Installation and development

Get started developing by executing the following commands:

To install dependencies:
`npm install`

To start the developement server:
`npm start`


## Backend Server

The `BooksAPI.js` file served as an API to connect to a databse of books which could be used for testing the functions of our library(book managemnt app)

It contains 3 functions which are the:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to an array of all books that had a _shelf_ property. Which were books already in our app.

### `update`

Method Signature:

```js
update(book, shelf)
```
The update method takes two arguments:
* book: is an `<Object>` argument or isntance of a book, containing at minimum an `id` attribute
* shelf: is a `<String>` argument which contains one of ["wantToRead", "currentlyReading", "read"] shelf properties 
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```
This method only takes one argument,
* query: this is the `<String>` that is passed to the query method which is used to make a request to the database.
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books don't know which shelf they are on, they lack a shelf property. They are raw results only.

## Important
The backend API uses a fixed set of query string. These can be found in the [SEARCH_TERMS.md](SEARCH_TERMS.md).
That list of terms are the _only_ terms that will work with the backend. So avoid using other queries to test the search output.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Hosted on the web at [My-Boooks](https://my-boooks.netlify.app/).