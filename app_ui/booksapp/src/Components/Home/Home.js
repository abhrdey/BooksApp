import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import HomeFilters from './HomeFilters'
import HomeContent from './HomeContent'
import SearchContainer from '../Search/SearchContainer'
import ActionConstants from '../../Constants/ActionNames'
import request from 'superagent'
//import DetailView from '../DetailView'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.search,
        cookies: ownProps.cookies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setRecentlyAdded: (payload) => dispatch({type: ActionConstants.SET_SELECTED_BOOKS_DATA, payload: payload})
    }
}

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if (!this.props.selectedBooks) {
            // Make an api call to fetch the currently updated books
            request.get(ActionConstants.API_HOST + "/booksApp/getBooks").set({
                "Accept": "application/json"
            }).then(response => {
                console.log(response)
                if (response["status"] === 200) {
                    let response_body = response["body"]
                    this.props.setRecentlyAdded(response_body)
                }
            })
        }
    }

    render() {
        let gridStyle = {
            "marginLeft": "-8rem",
            "paddingTop": "5px"
        }
        // console.log("cookies : ", this.props)
        return (
            <Container>
                <Grid style={gridStyle}>
                    <Grid.Column width={3}>
                        <HomeFilters />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <HomeContent selectedBooks={this.props.selectedBooks} />
                    </Grid.Column>
                </Grid>
                {/* <DetailView /> */}
                <SearchContainer cookies={this.props.cookies} />
            </Container>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)