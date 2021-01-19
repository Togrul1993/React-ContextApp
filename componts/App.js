import React, { Component } from 'react'
import BookList from './BookList'
import BookContextProvider from '../contexts/BookContext'
import ThemeContextProvider from '../contexts/ThemeContext'
import { ThemeContext } from '../contexts/ThemeContext'


class App extends Component {

  render() {

    return (
      <>
        <ThemeContextProvider>
          <ThemeContext.Consumer>
            {
              (themecontext) => {
                const { isDarkTheme, dark, light, changeTheme } = themecontext;
                const theme = isDarkTheme ? dark : light;

                return (
                  <div className="container-fluid" style={{ backgroundColor: theme.bg, color: theme.txt }}>
                    <div className="container">
                      <div className="row pt-3 pb-3">
                        <div className="col-lg-9 col-9 float-left p-3">
                          <h3 className="title">Books App Context</h3>
                        </div>
                        <div className="col-lg-3 col-3 text-center p-3">
                          <button type="button" className="btn btn-light" onClick={changeTheme} style={{ backgroundColor: theme.btnBg, color: theme.btnText }}>{isDarkTheme ? "Light" : "Dark"}</button>
                        </div>

                      </div>

                    </div>
                    <BookContextProvider>
                      <BookList />
                    </BookContextProvider>
                  </div>
                )
              }
            }
          </ThemeContext.Consumer>
        </ThemeContextProvider>
      </>
    )
  }
}

export default App
