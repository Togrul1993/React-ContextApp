import React, { Component } from 'react'
import Book from './Book'
import { BookContext } from '../contexts/BookContext'



class BookList extends Component {

	render() {

		return (
			<div className="container">
				< div className="row justify-content-center" >
					<BookContext.Consumer>
						{
							value => {

								return (
									value.books.map((book, i) => (
										<Book books={book} key={i} />
									))
								)
							}
						}
					</BookContext.Consumer>
				</div >
			</div>
		)

	}
}

export default BookList
