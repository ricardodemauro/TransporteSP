import { createStore, 
    compose, 
    applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import reducer from '../reducers/index'

const configureStore = () => {
    const store = createStore(
        reducer,
        applyMiddleware(thunk, createLogger())
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducer)
        })
    }

    return store
}

export default configureStore