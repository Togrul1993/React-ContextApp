import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Book extends Component {

	render() {
		const overviewTrim = (string, maxstring) => {
			if (!string) return null;
			if (string.length <= maxstring) return string;
			return `${string.substring(0, maxstring)} ...`
		}


		return (
			<>
				<ThemeContext.Consumer>
					{
						(themecontext) => {

							const { isDarkTheme, dark, light } = themecontext;
							const theme = isDarkTheme ? dark : light;

							return (
								<div className="col-lg-3 col-md-4 col-7  mb-5" >
									<div className="card cardH" style={{ backgroundColor: theme.card }}>
										<div className="card-header p-0" >
											<img className="card-img img-fluid" src={this.props.books.imageURL} alt="HeaderCardImage" />
										</div>
										<div className="card-body">
											<h4 className="card-title">{this.props.books.author}</h4>
											<h2 className="card-title">{this.props.books.title} </h2>
											<p className="card-text">{overviewTrim(this.props.books.topic, 100)}</p>
										</div>
										<div className="card-footer">
											<h5 className="card-text">Qiymeti : <p className="badge badge-danger">{this.props.books.sales} <i>AZN</i></p></h5>
										</div>
									</div>
								</div>
							)
						}
					}

				</ThemeContext.Consumer>

			</>
		)
	}
}

export default Book
