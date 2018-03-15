import { createStore } from "redux"

import { SET_MAP, ADD_ARTICLE } from "./constants/action-types";

import { Map } from "./components/Map"

const initialState = {
    currentMap: new Map(20, 30),
    articles: []
}

const gameState = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAP:
            state.currentMap = action.payload
            return state
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] }
        default:
            return state
    }
}

export default createStore(gameState)