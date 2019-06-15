// App.js

import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      //ki khelina n accediw l notre store mn ayi component
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}