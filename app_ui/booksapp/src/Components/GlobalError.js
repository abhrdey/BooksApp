import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Icon } from 'semantic-ui-react'
import './GlobalError.css'
import actionConstants from '../Constants/ActionNames'

const mapStateToProps = state => {
    return {
        ...state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearError: () => dispatch({type: actionConstants.CLEAR_GLOBAL_MESSAGE})
    }
}

class GlobalError extends Component {
    clearGlobalError = () => {
        this.props.clearError()
    }
    
    render() {
        if (this.props.errorMessage)
            return (
                <Message size="mini" negative>
                    {this.props.errorMessage}
                    <Icon name="close" onClick={this.clearGlobalError} />
                </Message>
            )
        else if (this.props.infoMessage)
            return (
                <Message size="mini" warning>
                    {this.props.infoMessage}
                    <Icon name="close" />
                </Message>
            )
        return null
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GlobalError)