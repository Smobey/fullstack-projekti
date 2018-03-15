import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import gameState from "./gameState"
import Game from "./components/Game"

import "./index.css"

ReactDOM.render(
    <Provider store={ gameState }>
        <Game />
    </Provider>,

    document.getElementById("root")
)