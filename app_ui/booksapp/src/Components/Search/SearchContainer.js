import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchModal from './SearchModal'
import actionConstants from '../../Constants/ActionNames'
import request from 'superagent'
//import { Cookies } from 'react-cookie'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        cookies: ownProps.cookies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedBooksData: (payload) => dispatch({type: actionConstants.SET_SELECTED_BOOKS_DATA, payload: payload})
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

    submitSelectedBooksData = (data) => {
        console.log("selected books : ", data)
        this.props.setSelectedBooksData(data)
        //this.props.cookies.set("name", "abc")
        //let csrf_token = this.props.cookies.get('csrftoken')
        //console.log("cookie csrftoken : ", csrf_token)
        // request.post(actionConstants.API_HOST + "/booksApp/metadata").send({
        //     payload: data
        // }).set({
        //     "X-CSRFToken": this.props.cookies.get('csrftoken'),
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     "Access-Control-Allow-Credentials": true
        // }).then(response => {
        //     console.log("search metadata response : ", response)
        // })
        request.post(actionConstants.API_HOST + "/booksApp/metadata").send({
            payload: data
        }).set({
            "Content-Type": "application/json"
        }).then(response => {
            console.log("search metadata response : ", response)
            this.closeModal()
        })
    }

    render() {
        return(
            <SearchModal searchData={this.state.searchData} showModal={this.state.showModal} closeModal={this.closeModal}
                selectedBooksData={this.submitSelectedBooksData} isLoading={this.props.isLoadingSearchData}  />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)