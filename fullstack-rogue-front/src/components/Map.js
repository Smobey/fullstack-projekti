import React from 'react'

export class Map {
    constructor(gameWindowHeight, gameWindowWidth) {
        const map = new Array(gameWindowHeight)
        for (let y = 0; y < gameWindowHeight; y++) {
            map[y] = new Array(gameWindowWidth)
            for (let x = 0; x < gameWindowWidth; x++) {
                map[y][x] = '·'
            }
        }

        this.map = map
    }

    draw() {
        let drawnMap = ""

        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[0].length; x++) {
                drawnMap += this.map[y][x]
            }
            drawnMap += '\n'
        }
    
        return drawnMap
    }
}

export default Map