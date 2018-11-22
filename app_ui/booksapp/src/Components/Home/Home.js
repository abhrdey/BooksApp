import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import HomeFilters from './HomeFilters'
import HomeContent from './HomeContent'
import SearchContainer from '../Search/SearchContainer'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        cookies: ownProps.cookies
    }
}

class Home extends Component {
    render() {
        let gridStyle = {
            "marginLeft": "-8rem",
            "paddingTop": "5px"
        }
        console.log("cookies : ", this.props)
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
                <SearchContainer cookies={this.props.cookies} />
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Home)