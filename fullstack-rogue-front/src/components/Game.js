import React from "react"
import { connect } from "react-redux"

import { Map } from "./Map"
import Render from "./Render"
import { addArticle } from "../actions/index"

import Form from "./Form";

const Game = ({ currentMap, articles }) => {
    const map = new Map(20, 30)
    console.log(addArticle)
    console.log(articles)
    return (
        <div className="gameField">
            <Render map={map}/>
            <Form />
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        articles: state.articles,
        currentMap: state.currentMap 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);