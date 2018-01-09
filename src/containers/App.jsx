import React, { Component } from 'react'

import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from '../misc/Store';

import Layout from '../components/Layout'
import Home from '../components/Home'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const customHistory = createBrowserHistory()
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router history={customHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <React.Fragment>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/faq" component={FAQ} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Layout>
      </React.Fragment>
    </Router>
  </Provider>
  );

export default App