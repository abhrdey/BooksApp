import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchModal from './SearchModal'

const mapStateToProps = state => {
    return {
        ...state
    }
}

class SearchContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchData: undefined,
            showModal: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchResults !== this.props.searchResults) {
            this.setState({
                searchData: nextProps.searchResults,
                showModal: true
            })
        }
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return(
            <SearchModal searchData={this.state.searchData} showModal={this.state.showModal} closeModal={this.closeModal} />
        )
    }
}

export default connect(mapStateToProps)(SearchContainer)