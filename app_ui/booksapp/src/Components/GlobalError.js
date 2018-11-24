import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import './GlobalError.css'

const mapStateToProps = state => {
    return {
        ...state.message
    }
}

class GlobalError extends Component {
    render() {
        if (this.props.errorMessage)
            return (
                <Message size="mini" negative>
                    {this.props.errorMessage}
                </Message>
            )
        else if (this.props.infoMessage)
            return (
                <Message size="mini" warning>
                    {this.props.infoMessage}
                </Message>
            )
        return null
    }
}

export default connect(mapStateToProps)(GlobalError)