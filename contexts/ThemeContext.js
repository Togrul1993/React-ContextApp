import React from 'react'

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
	state = {
		isDarkTheme: true,
		dark: { bg: '#222f3e', txt: '#CAD3C8', hover: "rgba(234, 181, 67,0.4)", card: "#341f97", btnBg: 'rgba(210, 218, 226,1.0)', btnText: 'rgba(72, 84, 96,1.0)' },
		light: { bg: 'rgba(210, 218, 226,1.0)', txt: 'rgba(72, 84, 96,1.0)', hover: "rgba(255, 168, 1,0.4)", card: "#ff9ff3", btnBg: '#222f3e', btnText: 'rgba(210, 218, 226,1.0)' }
	}

	changeTheme = () => {
		this.setState({
			isDarkTheme: !this.state.isDarkTheme
		})
	}


	render() {

		return (
			<ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}

export default ThemeContextProvider

// 1 ) -- Default Value ---- this.context  
// 2 ) -- Provider ---- Consumer