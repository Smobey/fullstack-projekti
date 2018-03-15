import React from 'react'
import {Map} from './Map'


const Game = ({ }) => {
    const map = new Map(20, 30)
    
    const RenderMap = () => {
        return map.draw()
    }

    return (
        <div className="gameField">
            <RenderMap/>
        </div>
    )
}

export default Game