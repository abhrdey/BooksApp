import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

class SearchModal extends Component {
    render() {
        return (
            <Modal open={false}>
                <Modal.Header>Search Books</Modal.Header>
            </Modal>
        )
    }
}

export default SearchModal