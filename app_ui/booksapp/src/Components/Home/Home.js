import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import HomeFilters from './HomeFilters'
import HomeContent from './HomeContent'
import SearchModal from '../Search/SearchModal'

const mapStateToProps = state => {
    return {
        ...state
    }
}

class Home extends Component {
    render() {
        let gridStyle = {
            "marginLeft": "-8rem",
            "paddingTop": "5px"
        }

        return (
            <Container>
                <Grid style={gridStyle}>
                    <Grid.Column width={3}>
                        <HomeFilters />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <HomeContent searchData={this.props.searchResults} />
                    </Grid.Column>
                </Grid>
                <SearchModal />
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Home)