import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

import './index.css'

const App = () => (
    <div>
        <p>Hello world</p>
    </div>
)

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)