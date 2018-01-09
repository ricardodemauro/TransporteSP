import injectTapEventPlugin from 'react-tap-event-plugin' // Needed for onTouchTap
import 'babel-polyfill' // http://redux.js.org/docs/advanced/AsyncActions.html#note-on-fetch

import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PropTypes from 'prop-types'

import NavBar from './Navbar'
import Footer from './Footer.jsx'

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const muiTheme = getMuiTheme({})

const Layout = ({ children }) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<React.Fragment> {/* MuiThemeProvider requires stricly one child element */}
			<NavBar />
			{children}
			<Footer />
		</React.Fragment>
	</MuiThemeProvider>
)

Layout.propTypes = {
	/** Children react elements */
	children: PropTypes.object
}

export default Layout
