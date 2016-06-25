import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

export default () => {
  return (
    <div>
      <App />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'))
})
