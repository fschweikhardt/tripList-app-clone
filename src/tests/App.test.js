

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    div)
})