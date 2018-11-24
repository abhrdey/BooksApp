import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import request from 'superagent'
import { connect } from 'react-redux'
import actionConstants from '../Constants/ActionNames'

const mapStateToProps = state => {
    return {
        ...state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchResults: (payload) => dispatch({type: actionConstants.SET_BOOK_SEARCH_DATA, payload: payload}),
        setSearchPrefix: (payload) => dispatch({type: actionConstants.SET_BOOK_SEARCH_PREFIX, payload: payload}),
        setErrorMessage: (payload) => dispatch({type: actionConstants.SET_ERROR_MESSAGE, payload: payload})
    }
}

class BooksSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchPrefix: this.props.searchPrefix?this.props.searchPrefix:undefined
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchPageIndex !== this.props.searchPageIndex)
            this.initiateSearch(nextProps.searchPrefix, nextProps.searchPageIndex)
    }

    handleSearchChange = (event, data) => {
        this.setState({
            searchPrefix: data.value
        })
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.props.setSearchPrefix(this.state.searchPrefix)
            // request.get(actionConstants.API_HOST + "/booksApp/search").query({ 'data': this.state.searchPrefix, 'start': this.props.searchPageIndex }).then(response => {
            //     console.log(response)
            //     if (response["status"] === 200) {
            //         let results = response["body"]
            //         this.props.setSearchResults(results)
            //     }
            // })
            this.initiateSearch(this.state.searchPrefix, this.props.searchPageIndex)
        }
    }

    initiateSearch = (prefix, index) => {
        request.get(actionConstants.API_HOST + "/booksApp/search").query({ 'data': prefix, 'start': index }).then(response => {
            console.log(response)
            if (response["status"] === 200) {
                let results = response["body"]
                this.props.setSearchResults(results)
            }
        }).catch(error => {
            let errorMessage = error["response"]["text"]
            console.log("Search error : ", errorMessage)
            this.props.setSearchResults(undefined)
            this.props.setErrorMessage(errorMessage)
        })
    }

    render() {
        return (
            <Search
                onSearchChange={this.handleSearchChange} 
                onKeyPress={this.handleKeyPress} 
                showNoResults={false} 
                value={this.state.searchPrefix} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksSearch)