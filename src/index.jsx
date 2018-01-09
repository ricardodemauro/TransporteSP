import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Utils from './misc/Utils'

import App from './containers/App'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	)
}

if(module.hot) {
	Utils.log('HMR hot enabled')
	module.hot.accept('./containers/App', () => render(App))
}

render(App)