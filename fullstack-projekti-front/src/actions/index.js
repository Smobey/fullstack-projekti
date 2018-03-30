import { SET_MAP, ADD_ARTICLE } from "../constants/action-types"

export const setMap = map => ({ type: SET_MAP, payload: map })
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });