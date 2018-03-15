import { createStore } from "redux"

import { SET_MAP, ADD_ARTICLE } from "./constants/action-types";

const initialState = {
    currentMap: "asd",
    articles: []
}

const gameState = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAP:
            state.currentMap = "foo"
            return state
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] }
        default:
            return state
    }
}

export default createStore(gameState)