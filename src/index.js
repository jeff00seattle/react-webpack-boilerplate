import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const container = document.getElementById('app')
document.body.appendChild(container)
render(<App />, container)
