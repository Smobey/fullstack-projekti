import React from "react"
import { connect } from "react-redux"

import Render from "./Render"
import { setMap } from "../actions/index"

class Game extends React.Component {    
    render() {
        console.log(this.props)
        return (
            <div className="gameField">
                <Render map={this.props.currentMap}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        currentMap: state.currentMap 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMap: currentMap => dispatch(setMap(currentMap))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);