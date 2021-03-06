import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

class MainPage extends Component {
  static propTypes = {
   updateBook: PropTypes.func.isRequired,
   books: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <ListBooks
                onChangeShelf={this.props.updateBook}
                books={this.props.books.filter((book) => book.shelf === "currentlyReading")}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <ListBooks
                onChangeShelf={this.props.updateBook}
                books={this.props.books.filter((book) => book.shelf === "wantToRead")}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <ListBooks
                onChangeShelf={this.props.updateBook}
                books={this.props.books.filter((book) => book.shelf === "read")}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainPage
