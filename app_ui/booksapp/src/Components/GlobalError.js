import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'
import './GlobalError.css'

class GlobalError extends Component {
    render() {
        return (
            <Message size="mini" negative>
                This is global error component
            </Message>
        )
    }
}

export default GlobalError