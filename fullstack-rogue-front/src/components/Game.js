import React from 'react'



const Game = ({ }) => {
    function initialiseMap() {
        const gameWindowHeight = 20
        const gameWindowWidth = 30

        const map = new Array(gameWindowHeight)
        for (let y = 0; y < gameWindowHeight; y++) {
            map[y] = new Array(gameWindowWidth)
            for (let x = 0; x < gameWindowWidth; x++) {
                map[y][x] = '·'
            }
        }

        return map
    }

    function DrawMap(props) {
        let drawnMap = ""

        for (let y = 0; y < props.map.length; y++) {
            for (let x = 0; x < props.map[0].length; x++) {
                drawnMap += props.map[y][x]
            }
            drawnMap += '\n'
        }
    
        return drawnMap
    }

    const map = initialiseMap()
    
    map[2][0] = '@'
    console.log(map)

    return (
        <div className="gameField">
            <DrawMap map={map}/>
        </div>
    )
}

export default Game